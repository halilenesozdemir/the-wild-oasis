import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();
  // @ts-ignore
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    // @ts-ignore
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited.");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => {
      // @ts-ignore
      toast.error(err.message);
    },
  });
  return { editCabin, isEditing };
}
