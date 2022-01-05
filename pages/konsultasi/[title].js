import appointments from './appointments'


export const getStaticPaths = async ()=>{
    const data = appointments

    const paths = data.map((a) =>{
        return{
            params: {}
        }
    })
}