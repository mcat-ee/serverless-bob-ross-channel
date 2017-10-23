'use strict';

var episodeIdList = ["VlucWfTUo1A","oh5p5f5_-7A","kasGRkfkiPM","dNEp3hoHSDI","lLWEXRAnQd0","pw5ETGiiBRg","L5bXkI0-pEg","I-ousb8-SD0","UQ-RTZCOQn0","BW2wKKFvH1g","XZmdzfvXRuw","enutOy-nsZk","LygUyAb78oY","HCsCatvigtw","vgbMONXc9Cs","PutvF_P4588","8ysFkNYwhAE","DFSIQNjKRfk","IEQWfszfRlA","RInDWhYceLU","qTDQt_PdlYc","nJGCVFn57U8","zxj3xLDNxo0","TohG7F8M3Ls","kJFB6rH3z2A","qXElmiqzcI0","0FYfo94qefg","VnZEpic2UzU","DFQlu6eqrBo","mEU0stNfkxI","qx2IsmrCs3c","OFKFUJ9eDNs","MHJB0IBnuD4","Ugiwi8uizpg","4KYxkqlzyqM","Qj6lMtnCt8o","O6L5YPt9CeU","RrBsbqO9aqI","wrbGlR22K0Q","GzSqjyQUPZQ","UOziR7PoVco","zoTeyliLn5o","Da4SPyh1ATM","vrAMRxBB5KI","aA8RhtaWACA","NcVeRlPu_5w","uEUMVwc4o5U","OJ_xqtvZf3o","Vx6v47gHBWM","eTEKGOi6SVg","KYlM2zJnNWY","8QWvzEQ69Kw","1s58rW0_LN4","DqhzxdkdQS0","loAzRUzx1wI","AGhXEPfp-W4","Wj-3ct7RvAI","4XxClvPZ1RE","GhOGZMpPUSE","530_cVmexiI","jfCsew_mz7A","6evqNlOO7Bw","OHSm8kLE7js","8P-YeoTmVrw","fBh1nA4pMDY","miJ19Kz_i3Y","tWoInh2USOs","o2cjLA_wgIk","gMEZp47VKC0","kNZssD9zWlw","iRMsb9Vf7GM","0pwoixRikn4","USkduOfwJok","EVQcDEiJh2o","lSeRrm5ZK9c","1-9_enMBquw","9jIt95PCFAA","RqtDliGeyTg","I4h6TC4CPJY","puGk2iFvvp0","a6Wil3OXNuI","y6GVVjG4HMg","IeFbdk36MUU","JUuP75RVZDI","H15kV1wbDG4","BbYO579MmhA","kMgd6r6c4vE","Hq-z06i6HCs","lzODyJS2ZIg","9N5IWKzYIyU","87MMbN1bQCs","VYcsYzzRae4","gnp6WE7Ql-s","PMDyPrE0puo","cC5ozePVKGI","22SiIDvyJeM","HWedDS3p7XI","4vXB2R8ybDE","hoimk4s8JoQ","GpA9UM7QGag","cMwkY8ojRik","vKyMU5Z8cDI","loit61vLUMc","GARWowi0QXI","AE1GKcL3NuI","l141Y0x8om0","sDdpc8uisD0","3CDg_9gL-5M","KvJmSrErm20","pYWiLm_-sXw","liR0gS0sZY0","HMx34Am6RFg","0uVe8T-vVVg","7R9HcaDT9P4","81QKellPA70","v8Znj8bbmCQ","V_l6olF3yHI","jwVz0uTLH1I","1l_TsfCIb_I","LiKCzeqn-kg","yAiYirlcq7o","K4aud_SpFDQ","l_jN9KN257M","9BHWlbjd95c","5rfGa1_iJpw","0mJqzzeWyXs","4E35-8x_y04","NqfRLiv0SZ0","9DU6bunvD_g","gYuH4Ilqdhs","Bcqyzo85A1o","tJRvBcqQd5A","RulXVcpgpqw","m6UM-rN2D6s","pfWV8NkotvU","kQlFwTOkYzg","nXlu_Q0sR7c","_kkZcIgocBM","C34WAUgkAT0","ubUXBqE6t0U","WJJwrnFhUUg","C-OSaHvt8ms","gmCXgS38NDc","ZKxFvyyOBPQ","3q8Zi9480lw","cR9hTbSomx4","_MdMhQIOL1Y","raAkJKeo0Sk","2gq2V6dCt2I","JdXCoxkOdwQ","LeIVNKnWz7o","EBZKuVbRY54","WGUcw_kFvzU","E3IAMvO8GyM","BSjee-ond7w","QDwd4pMYyuo","NjTlW2NL1Lo","NYUIIBFj0iQ","HOdS-G8p1KE","ReENCTH7MYI","-O0Bs65eN5w","7t6ue0pEcNE","G7Etn7QMeO4","tayQX_ng-Nc","rE5ZVs_YJfE","1enWTsRi16o","hP4GfMgsNVE","PbchoOWWCZs","CigXQtT6BPM","0M9pwLHRR2c","bSm3fmEyJ20","mUJoNLWQ1yI","u5VT_WGM0kg","HQC5sPN9Xhc","Q03YvknOVe0","QyncJfL_HmU","KsDPg5HZYNw","xdFCj6BzQio","Fw6odlNp7_8","VPfYRj4DDco","lilbzLCNnDo","QxcS7p1VHyQ","E3XW_Zp238U","Ov5oIHTAa10","se7wOprxRGs","TLX1bmS8wBE","wJmi7-G9r-w","IPPU49PyfEA","PGPVpil2UmE","2zv_S_uVoVQ","KmoRz01bm0Y","T2G5waMfQ-g","WT6n0K2zGnA","UUNNXGVNTuI","CiNDyckERXQ","ZoJ2tcXWb7g","wc_YVijYjT4","2OxSJcFvpoU","aOJsKNzO3i8","Q4n90jsOUtY","Y7SDU4i6Fco","QbclL1ca7_s","e5JhYi_G-l0","CY6sGFs209E","uBRKVa7sy1Q","wDnLlywAL5I","DmYhNHVIdMI","e63Cgln6Yag","mb-Gwx1S5Gs","obSLZWXmDak","wKeemvioVrM","aE4nID1p-t0","2uXMx8Kjs8I","ov4YaCQB9co","CnMLKAGi0yM","FozIp7Va7dY","XlwfcXZ0AIU","_TTdw3YnXuo","XBqD3QhKU24","wIZX57I4aDs","xj8xsTSkbUk","rTTWw5Gd79I","N_u6x7LeyTM","n9EsFFtwZnE","so--opB-yuQ","spFwCh2616s","1ZriQGhSFTM","kbnXZRNMouM","rRjnHdr9DmU","ODrV0dfQcNs","d50HkqB9JEM","LE6agCR5iBw","uY3fIry2tOE","pA_2paUhBAQ","67vdGbA3Xkg","chhCkmp0RG8","Me9Ietooq4w","MTInkV5ODjk","wbZreRaE74k","Kl5X3icOVvw","EHD9u-lo2wc","sBBBilrDuSw","rCHXqj4DHlM","iB1TDWlo0kk","uCAtI2IwEwk","vbPdQ0w8ylg","dN4HjAn8p5U","hEyR2FDp-00","knOutsaiKfU","y5k4GXw_-yI","yxAMOdl6RJE","gxd0MPX8c6I","XWQrP-WiLgc","P_aCan4cBwc","oJvk7gPDHiE","ikR7UT9mVBw","nK-HebXL2uw","HuHC1RqtvDA","Xzv3iiWi1Wo","Rh-jKrMrmOA","vGsW_6BCukU","fuFalEXVN0k","QglIjlqsUdU","ZHUdS0wEaKk","uZWNvDFfbUk","Dkww2nHpuZw","l_HqMYquc08","8satX-hLkuI","GWehiacnd1E","mFOna_LN7Ys","XvnJBynSiT0","DY1aBv8Z1SQ","H4GyGrT7lEQ","JDa6JPcqy88","aiK9xOIJtV8","Cg3XAVhAas0","lmKAwKrONmE","kdlHV6ceI_g","lhpfaW0k6uM","lTb8DN6G6dE","fz0YjqtHW84","ZY0ofhdV_L0","FdIUHudQABI","8tHHBTK6wwc","AmBDmgta3l4","cIUBUc_ITBc","q5moLoqOkP0","e0VUprkc1n0","rzYpa4XGSnA","7yU55PUls2c","_IREQ4SIcX8","6O4sfJd8G_M","4abDq6Q-mlM","cVqFG2pxK2A","3PZabdohLso","H4VsmKU5T7g","lLunPQBzW6g","FPW2FwK4IOo","4jAsLpJzjHM","2FpVyGanPwM","EVfPPJ5FUmA","mxJ2On9wyvY","6afHY2d9Lv8","GBN9AIw3Ao4","07acfzBaoa0","Io4fwhacpEs","Tnb2cXKKuWM","sS-hNYgDUak","R7Y3izMFPbM","NJbzIftLLmU","LEz4UVL7POE","2bjFmSQjQrw","ddU9vQvSpw8","COsJUfPN2dA","_xkn0ceDreo","uZyZW3tkCE0","aR-C3h5zURM","F4iPbH1OHsQ","urHQRbRNuYI","HqBhCibidNM","SrN4A9rVXj0","BQWJ3kqonpA","hfvhXOvg43w","9wp8NRzCJnw","TyOO6WeP2AY","j8Jf7QVKLgQ","vJpKhiXvXdA","QbgPu5f2Vf8","pSvgNkQdR2Y","WJF_qoQRPck","jq8bIbpW7DQ","n8HlFCQACYA","Qccgam514ds","VAdMkf-AAPM","xgjQ0v2d9mE","CP6_5cQVZvQ","dbMJVM4iL2Q","HFdTxqEznIk","x5CoQj9zr-c","nkDA_R-XmqA","U2_SKgM3f4A","p6Uy2qOLvGk","fcx1yUuSf3o","UVhhStJAJZc","YcbaMqq_X8s","crWDcTvDmec","06W8GsWj2Yg","ZyPNzDaaDt8","9xG6IzcGotI","GLkLO4KqTRs","kN1DP_yqs-A","ppzFgG2K2k4","JLnIUGOupOA","bgI3_1quJ18","HWrvW-NgaOY","FnY7jDY5PsE","e_bt9rQoGN0","c4b_B2F1eZg","JGzTg8fCj4w","u0Bz6TNUK1Q","8f9CCnqJ_1Y","JMPwj3u4ZTA","19oz9XHZNzA","2XnIdinwot0","VqMbL00eZqw","i29frkR1T98","qg9c1SqdRko","fRK8_ioYWw4","1yjGoJokbZg","uJLK85uU5mA","q48EWPrbzVs","j20pZ96E_CE","7ZUQTXuDPaI","uj5FE70BcB0","5U3G61r35Mc","YQPEy3hYGo8","-XA2h17y3HU","dJfnAyDLwPY","JjBZzKp_u5E","P_DaqkFbnac","8Zge88tVwjE","yTzlm_t0RmY","dafH8ks9Zww","crqmO3qDdco","Leiw-FtADZc","Z0vtjRLqXcQ","nU1zV93N-kI","HklPkQ0lSKA","2iNMoQB1Pe8","cFi_fJl40BA","q7WXF_BSEXw","txAtX-VyVNc","SLQXlFLoqQc","hdNH5axK4u0","9-ATP8xyDM0","flCWS9LB4Ks","ivesI3rU7dU","gOGJYHWjXgE","Hg5RKc6xiL4","d83REwSGfGo","yInYwy6AsDQ","46vI20697HI"];

module.exports.landingPage = (event, context, callback) => {
  let videoId = episodeIdList[Math.floor(Math.random() * episodeIdList.length)];
  let dynamicHtml = ``;
  let string = JSON.stringify(episodeIdList);

  const html = `
  <html>
    <style>
      h1 { color: #73757d; }
    </style>
    <body>
        <style>
    .videoPlayer{
      width: 100%;
      height: 100%;
    }

    body {
      margin:0;
      padding:0;
    }
  </style>
  <div class="videoPlayer" id="player"></div>
    <script>
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      function shuffle(a) {
          for (let i = a.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [a[i], a[j]] = [a[j], a[i]];
          }
      }

      var shuffledIdList = shuffle(episodeIdList);
      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: '${videoId}',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          },
          playlist: "VlucWfTUo1A,oh5p5f5_-7A,kasGRkfkiPM"
        });
      }

      // player.cuePlaylist(
      //   playlist: shuffledIdList
      // );



      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        // if (event.data == YT.PlayerState.ENDED) {
        //   setTimeout(stopVideo, 6000);
        //   done = true;
        // }
      }
      function stopVideo() {
        player.stopVideo();
      }
    </script>
  </p>
    </body>
  </html>`;

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  // callback is sending HTML back
  callback(null, response);
};
