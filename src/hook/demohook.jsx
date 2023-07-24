import { useQuery } from "@tanstack/react-query";

const useCollege = () =>{
    const { data: colleges = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['colleges'],
        queryFn: async () => {
            const res = await fetch('https://college-applicatio-form-server.vercel.app/Colleges');
            const data = await res.json();

            // console.log(data)
            return data;
        }
    });

    return [colleges, loading, refetch]
}

export default useCollege;