import React, {useEffect, useRef, useState} from 'react';
import s from './Sort.module.css';
import {NavLink} from "react-router-dom";
import list from '../../Data/listSort.json';
import {useSelector} from "react-redux";
import {selectSort} from "../../store/sortSlice";

const Sort = React.memo(function Sort() {
        let sortRef = useRef();
        const [visiblePopup, setVisiblePopup] = useState(false);
        const sort = useSelector(selectSort);
        console.log(sort);
        const handleClick = (e) => {
            e.preventDefault();
            console.log('work')
            return setVisiblePopup(!visiblePopup);
        };
        const handleOutsideClick = (e) => {
            if (!e.path.includes(sortRef.current)) {
                setVisiblePopup(false);
            }

        }
        useEffect(() => {
            window.addEventListener('click', handleOutsideClick);

        }, []);

        let [activeItem, setActiveItem] = useState({
            activeObject: null,
            objects: list
        });
        const onSelectItem = (index) => {
            setActiveItem({...activeItem, activeObject: activeItem.objects[index]});

        }
        const liActiveStyle = (index) => {
            if (activeItem.objects[index] === activeItem.activeObject) {
                return `${s.active}`;
            } else {
                return "";
            }

        }
        return (
            <>
                <div className={s.sort} ref={sortRef}>
                    <div className={s.categorySort}>

                        <span onClick={handleClick} className={`${s.sortClick}`}> Sort By:Recommended  </span><img
                        src="/images/arrow1.png"
                        alt="arrow"
                        className={s.imgSort}/>

                    </div>
                    {visiblePopup &&
                    (<div className={s.sortList}>
                        <ul>
                            {list.map((item, index) => {
                                return <li key={`${item}_${index}`} onClick={() => onSelectItem(index)}

                                >
                                    <NavLink className={liActiveStyle(index)}
                                              to={item.link}>{item.text}</NavLink></li>
                            })}
                        </ul>
                    </div>)}
                </div>
            </>
        );
    }
)

export default Sort;