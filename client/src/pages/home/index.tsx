import { Button } from "@nextui-org/react"
import { MdOutlineCreate } from "react-icons/md"
import { Link } from "react-router-dom"



export const Home: React.FC = () => {

  return (
    <div>
      <div className="flex items-center justify-between h-screen">
        <div className="w-1/2 flex flex-col items-center">
          <h1 className="text-6xl font-bold">Genealogical Tree</h1>
          <div className="w-1/2 h-[1px] bg-zinc-300 mt-6 mb-3"></div>
          <p className="text-xl w-[69%] text-center text-[#006FEE]">You can create your genealogical tree and compare your tree with your friends. This website is absolutely <span className="font-semibold">Free To Use</span></p>
          <Link to={'/tree'}><Button color="primary" className="font-semibold text-lg mt-14" size="lg">Create Tree <MdOutlineCreate className="text-xl"/></Button></Link>
        </div>
        <img src="/images/family.png" alt="family" className="w-[40%]"/>
      </div>
      <div className="w-2/3 mx-auto h-[2px] bg-zinc-300 my-10"></div>
      <div className="h-screen flex flex-col gap-40 justify-center">
        <h2 className="text-5xl font-bold">How it works?</h2>
        <div className="flex justify-between items-start">
          <div className="w-1/4">
            <div className="rounded-full w-10 h-10 bg-[#17C964] flex justify-center items-center text-white text-xl font-bold mb-5">1</div>
            <h3 className="text-2xl font-semibold mb-3">Firstly you start by adding everyone you know from your family.</h3>
            <p className="text-xl">You will start by adding your parents, grandparents, ... (everyone you know) and adding their date of birth and date of death (if dead).</p>
            {/* <img src="" alt="" /> screenshot*/}
          </div>
          <div className="w-1/4">
            <div className="rounded-full w-10 h-10 bg-[#F5A524] flex justify-center items-center text-white text-xl font-bold mb-5">2</div>
            <h3 className="text-2xl font-semibold mb-3">Secondary you save your tree.</h3>
            <p className="text-xl">After adding all information about your family, you can save your tree. Don't worry if you close website or logout your tree automatically save it.</p>
            {/* <img src="" alt="" /> screenshot*/}
          </div>
          <div className="w-1/4">
            <div className="rounded-full w-10 h-10 bg-[#F31260] flex justify-center items-center text-white text-xl font-bold mb-5">3</div>
            <h3 className="text-2xl font-semibold mb-3">Finally you can share and compare your tree with your friends.</h3>
            <p className="text-xl">After saving your tree you can share and compare your tree with your friends but to do this you or your friends must to send permission.</p>
            {/* <img src="" alt="" /> screenshot*/}
          </div>
        </div>
        <Link to={'/tree'}><Button color="primary" className="font-semibold text-lg w-[200px] self-center" size="lg">Create Tree <MdOutlineCreate className="text-xl"/></Button></Link>
      </div>
      <div className="w-2/3 mx-auto h-[2px] bg-zinc-300 my-10"></div>
      <div className="h-screen flex flex-col gap-40 justify-center items-center">
        <h2 className="text-5xl font-bold">Advantages Genealogical Tree</h2>
        <div className="flex justify-between items-start">
          <div className="w-1/4">
            <div className="flex items-center gap-2">
              <img src="/images/tree.png" alt="tree" className="w-[75px] mb-5"/>
              <h3 className="text-2xl font-semibold mb-3">Build Your Tree with Ease</h3>
            </div>
            <p className="text-xl">You create your tree just by adding information such as date of birth and date of death about person from your family.</p>
          </div>
          <div className="w-1/4">
            <div className="flex items-center gap-2">
              <img src="/images/tree1.png" alt="tree" className="w-[75px] mb-5"/>
              <h3 className="text-2xl font-semibold mb-3">Shared and Compared</h3>
            </div>
            <p className="text-xl">You can share and compare your tree with your friends. You or your friends must to send permission, after accepted it you or your friends will see tree.</p>
          </div>
          <div className="w-1/4">
            <div className="flex items-center gap-2">
              <img src="/images/tree2.png" alt="tree" className="w-[75px] mb-5"/>
              <h3 className="text-2xl font-semibold mb-3">Save and Export</h3>
            </div>
            <p className="text-xl">You can save your tree and export it in a few seconds. You will use it in presentation or in another thing.</p>
          </div>
        </div>
        <Link to={'/tree'}><Button color="primary" className="font-semibold text-lg w-[200px] self-center" size="lg">Create Tree <MdOutlineCreate className="text-xl"/></Button></Link>
      </div>
      <div className="w-2/3 mx-auto h-[2px] bg-zinc-300 my-10"></div>
      <div className="h-[50vh] flex justify-between items-center">
        <div className="flex flex-col justify-start w-[45%]">
          <h2 className="text-5xl font-bold">What is a family tree?</h2>
          <h3 className="text-2xl font-bold my-5">Definition:</h3>
          <p className="text-xl">A family tree is a visual representation of an extended family, based on names, dates, places, and relationships. It shows how individuals are connected across different generations.</p>
          <Link to={'/tree'}><Button color="primary" className="font-semibold text-lg w-[200px] mt-10" size="lg">Create Tree <MdOutlineCreate className="text-xl"/></Button></Link>
        </div>
        <img src="/images/happy_family.png" alt="happy family"/>
      </div>
    </div>
  )
}
