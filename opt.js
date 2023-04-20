		  
    //添加前清空所有customObject 防止id重复
    __g.customObject.clear();
    __co_location = [113.951823, 22.515748, 0.25];
    let o = {
        id: 'o1',//自定义对象唯一id
        pakFilePath:  'D:/prj/ac/pak/custom.pak',//pak文件路径
        assetPath: '/Game/Common/Asset_Bank/Mesh/Car/BP_Car_JiuHuChe',//资源目录，自定义对象在pak文件资源包里的相对路径
        location: __co_location,//位置坐标
        coordinateType: 1,// 坐标系类型 
        rotation: [0, 0, 0],//旋转
        scale: [1, 1, 1],//缩放
        smoothMotion: 1,   //1: 平滑插值，0: 跳跃
    };
    await __g.customObject.add(o);
    __g.customObject.focus(o.id);




    		  
    //添加前清空所有customObject 防止id重复
    __g.customObject.clear();
    __co_location = [113.951823, 22.515748, 0.25];
    let o = {
        id: 'o1',//自定义对象唯一id
        pakFilePath:  'D:/prj/ac/pak/YeLu.pak',//pak文件路径
        assetPath: '/JC_CustomAssets/EffectLibrary/Exhibition/ModelLibrary/YeLu_Car',//资源目录，自定义对象在pak文件资源包里的相对路径
        location: __co_location,//位置坐标
        coordinateType: 1,// 坐标系类型 
        rotation: [0, 0, 0],//旋转
        scale: [1, 1, 1],//缩放
        smoothMotion: 1,   //1: 平滑插值，0: 跳跃
    };
    await __g.customObject.add(o);
    __g.customObject.focus(o.id);


    

    const __gps_pos = [
        [
            113.951823,
            22.515748
        ],
        [
            113.952046,
            22.515762
        ],
        [
            113.952101,
            22.515748
        ],
        [
            113.952392,
            22.515739
        ],
        [
            113.952573,
            22.51573
        ],
        [
            113.952694,
            22.515732
        ],
        [
            113.952861,
            22.515712
        ],
        [
            113.953099,
            22.515683
        ],
        [
            113.953303,
            22.515685
        ],
        [
            113.953688,
            22.515649
        ],
        [
            113.954044,
            22.515634
        ],
        [
            113.954469,
            22.515629
        ],
        [
            113.954733,
            22.515647
        ],
        [
            113.955221,
            22.515677
        ],
        [
            113.95545,
            22.515681
        ],
        [
            113.955744,
            22.515693
        ],
        [
            113.955986,
            22.515693
        ],
        [
            113.956243,
            22.515743
        ],
        [
            113.956505,
            22.515765
        ],
        [
            113.956425,
            22.515894
        ],
        [
            113.95642,
            22.516199
        ],
        [
            113.956425,
            22.516537
        ],
        [
            113.956432,
            22.516725
        ],
        [
            113.956435,
            22.517007
        ],
        [
            113.956407,
            22.517192
        ],
        [
            113.956133,
            22.517316
        ]
    ]
    
    /**
     * 功能描述：实现车辆按GPS轨迹移动，每隔500毫秒移动一次 
     */
    //构造移动路径点数组
    //从GPS移动轨迹__gps_pos数组取值 数据详情见cloud安装目录\sdk\test\int_test_data0.js
    let pathPointArr = [];

    for (let i = 0; i < __gps_pos.length; i++) {
        //构造数组元素 每2秒移动一次
        let elementPoint = { 'time': (i) * 2, 'coordinate': __gps_pos[i] };
        pathPointArr.push(elementPoint);
    }
    //设置跟随相机
    __g.customObject.focus('o1', 10);
    //车辆按GPS轨迹移动
    __g.customObject.startMove('o1', 1, pathPointArr);
