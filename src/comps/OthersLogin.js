import React from 'react';
import { AiFillGoogleCircle, AiOutlineGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const OthersLogin = () => {
    return (
        <div>
            <div className='flex justify-center mt-3'>
                <ul class="share-icons">
                    <li class="share-icons__item">
                        <AiFillGoogleCircle></AiFillGoogleCircle>
                    </li>
                    <li class="share-icons__item">
                        <AiOutlineGithub></AiOutlineGithub>
                    </li>
                    <li class="share-icons__item">
                        <BsFacebook></BsFacebook>
                    </li>

                    <li class="share-icons__block">
                        <div class="share-icons__block-left">
                            Login with
                        </div>
                        <div class="share-icons__block-right">
                            Login with
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OthersLogin;