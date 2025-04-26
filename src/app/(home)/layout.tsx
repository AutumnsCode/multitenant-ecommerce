import { Footer } from "./footer";
import { Navbar } from "./navbar";


interface Props {
    children: React.ReactNode
}

const homeLayout = ({children }: Props) => {
    return ( 
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="bg-[#f4f4f0] flex-1">
                {children}
            </div>
            <Footer />
        </div>
     );
}
 
export default homeLayout;