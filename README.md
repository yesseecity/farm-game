# farm-game
農場遊戲 - Orgafun

遊玩畫面  [https://yesseecity.github.io/farm-game/public/](https://yesseecity.github.io/farm-game/public/)

### 玩法
- 點選右上方雜草圖示選取除草工具，對場內田地進行除草，有石頭的田地為未開放田地，未來須花錢解鎖，按右鍵可取消道具的拿取狀態。
- 除草後始用種子可種植。
- 灑入種子後要澆水，作物才會生長。
- 加肥料可加速植物生長。
- 當作物生長到最終階段後，在未拿取道具的狀態，按左鍵可以收成。
- 左下籃子的圖示可看現有收成，並向合作小農下訂相關蔬果。
- 訂購功能尚未開放。
- 除蟲工具尚未開放。
- 天氣狀態左方的SHOP為道具商城，未來可購買種子，尚未開放。
- 點信箱可以看最近的農業新聞。

### 開發環境安裝
- 安裝nodejs  
  請參考 [https://nodejs.org/en/](https://nodejs.org/en/)

- 安裝yarn  
  請參考 [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

- 安裝 node moules  
  至專案root 使用指令 `yarn install`

----

### 啟動開發用server
  至專案root  
  使用指令 `yarn dev` 
  並到 [http://localhost:8080/](http://localhost:8080/)  
  即可看到畫面

----

### 預覽變成應用程式後的畫面
  至專案root  
  使用指令 `yarn start`  

----
    
### 打包成 windows exe
  至專案root  
  使用指令 `yarn build_win`  
  打包後的exe 則會出現在 `專案root/dist/` 底下

----



