import Api from "@/services/api";
export default{
    signIn(credential){
        return Api().post("/auth/login",credential)
    }
}