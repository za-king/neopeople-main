
import { useRouter } from 'next/router'


export default function detail() {
    const router = useRouter()
    const title =  router.query.title
    return (
        <div>
            detail{title}
        </div>
    )
}
