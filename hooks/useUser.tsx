import { User } from "@supabase/auth-helpers-nextjs";
import { createContext, useEffect, useState } from "react";

import { Subscription, UserDetails } from "@/types";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetail: UserDetails | null;
  isLoading: boolean;
  subscription: Subscription | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [propName: string]: any;
}

export const MyUserContext = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();

  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetail, setUserDetail] = useState<UserDetails | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const getUserDetail = () => supabase.from("users").select("*").single();

  const getSubscription = () =>
    supabase
      .from("subscriptions")
      .select("*, prices(*), products(*)")
      .in("status", ["trialing", "active"])
      .single();

  useEffect(() => {
    if (user && !isLoadingData && !userDetail && !subscription) {
      setIsLoadingData(true);
      Promise.all([getUserDetail(), getSubscription()]).then((results) => {
        const userDetailsPromise = results[0];
        const subscriptionPromise = results[1];

        if (userDetailsPromise.status === "fulfilled") {
          setUserDetail(userDetailsPromise.value.data as UserDetails);
        }
      });
    }
  }, []);
};
