import ApplicantViewPage from '../screens/AccessH2OView/ApplicantView'
import { getAll } from '../actions/Client'

// export const getServerSideProps = async (ctx) => {
// //   console.log(
// //     'ApplicantViewPage getServerSideProps, cookies: ',
// //     ctx.req.headers.cookie
// //   )
//   const applicants = await getAll(ctx.req.headers.cookie)
//   return { props: { applicants: applicants } }
// }

export default ApplicantViewPage
