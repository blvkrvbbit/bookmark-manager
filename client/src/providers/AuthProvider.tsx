import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import api from "../lib/api";

export type User = {
  id: number;
  email: string;
  full_name: string;
};

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
};

type Props = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await api.get("/auth/me");
      console.log(res.data.user);
      setUser(res.data.user);
    } catch (err: any) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const login = async (data: { email: string; password: string }) => {
    try {
      await api.post("/auth/sign-in", data);
      await fetchUser();
    } catch (err) {
      throw err;
    }
  };

  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, refresh: fetchUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
