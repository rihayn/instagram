import propic from "../assets/propic.svg";
import auth from "../assets/Frame.svg";
import post from "../assets/Auto Layout Horizontal.svg";
import like from "../assets/like.svg";
import save from "../assets/save.svg";
import comment from "../assets/comment.svg";
import emoji from "../assets/emoji.svg";
export default function PostCard() {
  return (
    <section className="flex justify-center items-center">
      <div className="flex-col w-l">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center gap-2">
            <div>
              <img src={propic} alt="" />
            </div>
            <h3 className="text-[#262626] text-sm font-bold">lewishamilton</h3>
            <img src={auth} alt="" />
            <span className="text-[#8E8E8E] text-sm  ">. 5h</span>
          </div>
          <span className="text-[#262626] text-sm font-bold">. . .</span>
        </div>
        <img className="rounded-sm" src={post} alt="post" />
        <div className="flex justify-between py-3 ">
          <div className="flex gap-4 ">
            <img src={like} alt="" />
            <img src={comment} alt="" />
          </div>
          <img src={save} alt="" />
        </div>
        <div>
          <span className="text-[#262626] text-sm font-bold">741,368 </span>
          <span className="text-[#262626] text-sm font-bold">likes</span>
        </div>
        <div className="flex gap-1 mt-2">
          <h3 className="text-[#262626] text-sm font-bold">lewishamilton</h3>
          <p className="text-[#262626] text-sm font-semibold ">
            Parabéns Ayrton, minha inspiração sempre 🇧🇷💫
          </p>
        </div>
        <span className="text-[#262626] text-xs font-bold block my-2 ">
          See translation
        </span>
        <a className="text-[#8E8E8E] text-sm  pb-2 block">
          View all 13,384 comments
        </a>
        <div className="flex items-center justify-between pb-5 border-b-1 border-[#DBDBDB] mb-2 ">
          <input
            type="text"
            placeholder="Add a comment…"
            className="placeholder:text-[#262626] text-sm font-semibold"
          />
          <img src={emoji} alt="emoji" />
        </div>
      </div>
    </section>
  );
}
