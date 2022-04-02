import { Link } from "react-router-dom";
import CustomButton from "../../../../components/button/CustomButton";
import './SlidesCards.scss'

export default function SlidesCard ({img,title,body ,id,type}) {

    return(
        <div className="slides_card">
            <div style={{width:'100%'}}>
                <img style={{width:'100%', height:'200px'}} src={img} alt="" />
            </div>
            <div className="title_container">
                <h2>{title}</h2>
            </div>
            <div className="body_container">
                <p>{body}</p>   
            </div>
            <div>
               <Link to={`${type}/${id}`}> <CustomButton className='SlidersBTN' type='outlined'>ПОДРОБНЕЕ</CustomButton></Link>
            </div>
        </div>
    )
}