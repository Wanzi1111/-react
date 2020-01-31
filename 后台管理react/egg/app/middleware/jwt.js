const jwt=require("jsonwebtoken");
const url=require("url");
function verif(token,keys){
    return new Promise(res=>{
        jwt.verify(token,keys,(error,resolt)=>{
            if(error) throw error;
            res(resolt)

        })
    })
}

module.exports=(options)=>{
    return async (ctx,next)=>{
        if(options.includes(url.parse(ctx.url).pathname)){
            await next();
            return
        }

        const token=ctx.get("tokens");
        // console.log(token,"徐肖洁")
        if(!token){
            ctx.body={code:0,msg:"没有权限,请先登录"}
            return
        }
        let info 
        try {
            info=await verif(token,"wanzi")
            
        } catch (error) {
            ctx.body={code:0,msg:"权限错误,请先登录"}  
            return          
        }
        ctx.info=info
        await next()

    }
}