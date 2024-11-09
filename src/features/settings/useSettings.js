import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryFn: getSettings,
    queryKey: ["settings"],
    onSuccess: () => {
      toast.success("Başarılı");
    },
  });
  return { isLoading, error, settings };
}
