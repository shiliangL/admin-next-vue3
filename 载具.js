   
    await __g.vehicle.delete('vc1');
    let vc1 = {
        "id": "vc1",
        "coordinateType": 1,
        "coordinate": [113.951823, 22.515748, 0.25],
        assetPath: '/Game/Common/Asset_Bank/Mesh/Car/BP_Car_JiuHuChe',//资源目录，自定义对象在pak文件资源包里的相对路径
        "rotation": [0, 0, 0]
    };
    __g.vehicle.add(vc1);
    __g.vehicle.focus('vc1');



    //模拟实时gps坐标
    let realTimeGPSPoint = [
        [113.951823, 22.515748 ],
        [113.952046, 22.515762 ],
        [113.952101, 22.515748 ],
        [113.952392, 22.515739 ],
        [113.952573, 22.51573 ],
        [113.952694, 22.515732 ],
        [113.952861, 22.515712 ],
        [113.953099, 22.515683 ],
        [113.953303, 22.515685 ],
        [113.953688, 22.515649 ],
        [113.954044, 22.515634 ],
        [113.954469, 22.515629 ],
        [113.954733, 22.515647 ],
        [113.955221, 22.515677 ],
        [113.95545, 22.515681 ],
        [113.955744, 22.515693 ],
        [113.955986, 22.515693 ],
        [113.956243, 22.515743 ],
        [ 113.956505, 22.515765 ],
        [ 113.956425, 22.515894 ],
        [ 113.95642, 22.516199 ],
        [ 113.956425, 22.516537 ],
        [ 113.956432, 22.516725 ],
        [ 113.956435, 22.517007 ],
        [ 113.956407, 22.517192 ],
        [ 113.956133, 22.517316]
    ];

    const moveToArr = realTimeGPSPoint.map((item,index)=> ({
        "id": "vc1", "coordinate": [...item, 2], "gear": 3, "timeStamp":  index
    }))
    __g.vehicle.moveTo(moveToArr);


    //模拟1秒获取一个gps坐标位置 并设置载具运动MoveTo方法
    // let index = 0;
    // let timer = setInterval(function(){
    //     index++;
    //     if(index < 25){
    //         let moveToArr = [
    //             { "id": "vc1", "coordinate": [... realTimeGPSPoint[index-1], 2], "gear": 3, "timeStamp": index-1 },
    //         ];
    //         //实时移动
    //         __g.vehicle.moveTo(moveToArr);
    //         //启动载具
    //         if(index == 1){
    //             __g.vehicle.start([{
    //                 id: 'vc1',
    //                 timeStamp: 0
    //             }]);
    //         }
    //     }else{
    //         //运动结束后清除定时器
    //         clearInterval(timer);
    //     }
    // },500);
    
