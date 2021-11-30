import React, {useRef, useState} from 'react';
import s from "../components/GoodsPart1/GoodsPart1.module.css";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import GoodsPart1 from "../components/GoodsPart1";
import {fetchAllGoods} from "../redux/actions/response";
//import GoodsLoadingBlock from "../components/GoodsPart1/GoodsLoadingBlock";
import {selectAllGoods} from "../store/allGoodsSlice";
import {getIncrement} from "../store/cartSlice";
import {getIncrementWishList} from "../store/wishListSlice";


const GoodsListOne = () => {

    let dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const allGoods = useSelector(selectAllGoods);
    let arr = allGoods.slice(0, 10);

    //const loading = useSelector(selectAllGoods);

    const ref = useRef();

    React.useEffect(() => {
        dispatch(fetchAllGoods())

    }, [dispatch]);

    const leftArrow = () => {
        let counter = count;
        counter = counter - 200;
        setCount(counter);
        if (counter < -928) {
            counter = 0;
            setCount(counter++);

        }
        ref.current.style.left = counter + 'px';

    }
    const clickHandler = (e) => {
        e.preventDefault();
        let t = e.target;
        if (!t.classList.contains('add-to-cart')) return true;
        dispatch(getIncrement(t.getAttribute('data-key')));


    }
    const clickHandlerToWishList = (e) => {
        e.preventDefault();
        let t = e.target;
        if (!t.classList.contains('wish-list')) return true;
        dispatch(getIncrementWishList(t.getAttribute('data-key')));

    }

    const rightArrow = () => {
        let counter = count;
        counter = counter - 200;
        setCount(counter);
        if (counter < -928) {
            counter = 0;
            setCount(counter++);

        }
        ref.current.style.left = counter + 'px';
        console.log(ref.current.style.left);

    }


    return (
        <>
            <div className={s.contentDiv}>
                <div className={s.content}>

                    <h2><img src="/images/drop.png" alt=""/>
                        Top New Products</h2>
                    <div className={s.cardList} ref={ref} onClick={clickHandler} >
                        {(arr.map(item => <GoodsPart1 key={item.articul} image={item.image}
                                                      sale={item.sale} heart={item.heart}
                                                      proImages={item.proImages}
                                                      zoomImages={item.zoomImages}
                                                      arrowsImages={item.arrowsImages}
                                                      overline={item.overline}
                                                      description={item.description}
                                                      articul={item.articul} title={item.title}
                                                      cost={item.cost}
                                                      item={item}
                                                      clickHandlerToWishList={clickHandlerToWishList}


                        />))}
                        {/*: Array(10).fill(0).map((_, index) => <GoodsLoadingBlock key={index}/>)*/}
                    </div>
                </div>
                <div className={s.divBtn}>
                    <div className={`${s.btnPrev} ${s.btn}`} onClick={leftArrow}><img src="images/left.png" alt=""/>
                    </div>
                    <div className={`${s.btnNext} ${s.btn}`} onClick={rightArrow}><img src="images/arrow right.png"
                                                                                       alt=""/></div>

                </div>
            </div>
            }


        </>
    );
};

export default GoodsListOne;











