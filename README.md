# myminions

使用css3和js制作小黄人的动画

**最终要实现身体，手，眼睛以及脚的动画。**

----------
**小黄人身体部件拆分**

```
1.容器
  2.头毛
      三根头发
    3.身体
        眼镜线
        眼睛
          眼珠
        嘴
          嘴上部分覆盖
      --裤子---（这里源代码写的有点问题，没把裤子做到一起，被我分开了）
          背带裤带子
           纽扣
          背带裤下部分             （pant-A） （pantA与B是裤子部分）
          背带裤上部分（正方形）    （pant-B）   
     4.手
        左手
          左手手杆
            左手手掌
            左手三根手指 
        右手
          右手手杆
            右手手掌
            右手三根手指       
     5.屁股 （emmm）
        腿
          左腿
            左腿裤子
            左腿裤子覆盖
          左边鞋子
          右腿
            右腿裤子
            左腿裤子覆盖
          右边鞋子
          
```

**总结 ：**
（8.31） 
  

 - 还未写完js部分
     
 - 不知道代码能不能分开近几个文件分开管理，动画和css分开这种，下次会试试，这样便于修改
 - 代码结构不是很清晰
 - 记得打草稿，最后总结发现结构写的太混乱，导致后面动画rotate部分确定原点部分很困难

（9.2） 
  

 - 优化css代码


