const base = {
    get() {
        return {
            url : "http://localhost:8080/huoguodianguanli/",
            name: "huoguodianguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/huoguodianguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "火锅店管理系统"
        } 
    }
}
export default base
