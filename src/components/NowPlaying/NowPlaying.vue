<template>
    <div class="movie_body">
        <ul>
            <li>
                <div class="pic_show"><img src="../../../public/images/001.png"
                    alt=""/>
                </div>
                <div class="info_list">
                    <h2>机械师复活:复活</h2>
                    <p>观众评<span class="grade">8.9</span></p>
                    <p>
                        主演:杰森斯坦森杰森斯坦森 杰森斯坦森 杰森斯坦森 杰森斯坦森 杰森斯坦森
                    </p>
                    <p>今天50家影院放映800场</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="../../../public/images/002.png"
                    alt=""/>
                </div>
                <div class="info_list">
                    <h2>机械师复活:复活</h2>
                    <p>观众评<span class="grade">8.9</span></p>
                    <p>
                        主演:杰森斯坦森杰森斯坦森 杰森斯坦森 杰森斯坦森 杰森斯坦森 杰森斯坦森
                    </p>
                    <p>今天50家影院放映800场</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="../../../public/images/003.png"
                    alt=""/>
                </div>
                <div class="info_list">
                    <h2>机械师复活:复活</h2>
                    <p>观众评<span class="grade">8.9</span></p>
                    <p>
                        主演:杰森斯坦森杰森斯坦森 杰森斯坦森 杰森斯坦森 杰森斯坦森 杰森斯坦森
                    </p>
                    <p>今天50家影院放映800场</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="../../../public/images/004.png"
                    alt=""/>
                </div>
                <div class="info_list">
                    <h2>机械师复活:复活</h2>
                    <p>观众评<span class="grade">8.9</span></p>
                    <p>
                        主演:杰森斯坦森杰森斯坦森 杰森斯坦森 杰森斯坦森 杰森斯坦森 杰森斯坦森
                    </p>
                    <p>今天50家影院放映800场</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>
            </li>
                <li>
                <div class="pic_show"><img src="../../../public/images/005.png"
                    alt=""/>
                </div>
                <div class="info_list">
                    <h2>机械师复活:复活</h2>
                    <p>观众评<span class="grade">8.9</span></p>
                    <p>
                        主演:杰森斯坦森杰森斯坦森 杰森斯坦森 杰森斯坦森 杰森斯坦森 杰森斯坦森
                    </p>
                    <p>今天50家影院放映800场</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>
            </li>
                <li>
                <div class="pic_show"><img src="../../../public/images/006.png"
                    alt=""/>
                </div>
                <div class="info_list">
                    <h2>机械师复活:复活</h2>
                    <p>观众评<span class="grade">8.9</span></p>
                    <p>
                        主演:杰森斯坦森杰森斯坦森 杰森斯坦森 杰森斯坦森 杰森斯坦森 杰森斯坦森
                    </p>
                    <p>今天50家影院放映800场</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
        name:"NowPlaying"
}
</script>
<style>
    #content .movie_body{
        flex: 1;
        overflow: auto;
    }
    .movie_body ul{
        margin: 0 12px;
    }
    .movie_body ul li{
        margin-top: 12px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        padding-bottom: 10px;
    }
    .movie_body .pic_show{width: 64px;height: 90px;}
    .movie_body .pic_show img{width: 100%;}
    .movie_body .info_list{margin-left: 10px;flex:1;position: relative;}
    .movie_body .info_list h2{
        font-size: 17px;
        line-height: 24px;
        width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .movie_body .info_list p{
        font-size: 13px;
        color: #666;
        line-height: 22px;
        width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .movie_body .info_list .grade{
        font-weight: 700;
        color: #faaf00;
        font-size: 15px;
    }
    .movie_body .info_list img{
        width: 50px;
        position: absolute;
        right: 10px;
        top: 5px;
    }
    .movie_body .btn.mall,.movie_body .btn_pre{
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        background-color: #f03d37;
        color: #fff;
        border: #fff;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
    }
    .movie_body .btn_pre{
        background-color: #3c9fe6;
    }
</style>