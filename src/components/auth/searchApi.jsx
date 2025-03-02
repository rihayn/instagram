import axios from "axios";
const searchUSers = () => {
    const [users, setUsers] = usestate([])
    const [loading, setloading] = usestate(false)
    const [hasSearch, setHasSearch] = usestate(false)
    const SearchApi = (async (FormData) => {
        try {
            setloading(true);
            setHasSearch(true);
            const response = (
                axios.get(`user/searchUser?search=${FormData}&limit=5'`)
            ).data;
            setUsers(response.users);
            
        } catch (error) {
            console.log(error);
        }finally{
            setloading(false)
        }
    })
}


