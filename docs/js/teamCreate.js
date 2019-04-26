var jsonString = [{ "name": "阿部 圭史", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/49650871_1174433419375127_1765382621245734912_n.jpg?_nc_cat=100&_nc_ht=scontent-nrt1-1.xx&oh=a2730ac301f8e765cb6bc341dbeff23f&oe=5D2CDE53" }, { "name": "難波江 基己", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c33.33.410.410a/s200x200/625485_596075800437742_1284815735_n.jpg?_nc_cat=100&_nc_ht=scontent-nrt1-1.xx&oh=43a8e0ba6709640139b3438314a9787d&oe=5D311665" }, { "name": "志村 翔太", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/10987760_659553280839676_469105410239659670_n.jpg?_nc_cat=102&_nc_ht=scontent-nrt1-1.xx&oh=88c88df5ec6c402e3593a3c041945b8a&oe=5D3621E2" }, { "name": "渡部 陽介", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/57788216_1267335576767876_9178377053223780352_n.jpg?_nc_cat=101&_nc_ht=scontent-nrt1-1.xx&oh=273fd122d16613fccd86f86f2c2075c7&oe=5D6F6CE5" }, { "name": "Kana Omori", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c39.39.484.484a/s200x200/602636_402882326447194_1032274440_n.jpg?_nc_cat=107&_nc_ht=scontent-nrt1-1.xx&oh=615bd37dac2381df4d0c33367aa58855&oe=5D3EF6F6" }, { "name": "Hayato Matsumoto", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/50257548_223783048573436_1106260782334607360_n.jpg?_nc_cat=105&_nc_ht=scontent-nrt1-1.xx&oh=fc38b5ec8468ec6eb5c55ee367ce45b7&oe=5D317CE3" }, { "name": "梅田 圭太", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/47680474_148275196144364_2849189387571298304_n.jpg?_nc_cat=104&_nc_ht=scontent-nrt1-1.xx&oh=73ffb74e8aff77e83be5c9e0bb73377f&oe=5D6E050B" }, { "name": "Atsushi Yamamoto", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/17458024_116703518866848_8854216761508355222_n.jpg?_nc_cat=103&_nc_ht=scontent-nrt1-1.xx&oh=f79d5fd644583da6984c260267d7402a&oe=5D713FC2" }, { "name": "吉田 大樹", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/10393771_1392453211044724_430063713553090743_n.jpg?_nc_cat=106&_nc_ht=scontent-nrt1-1.xx&oh=a597e2d8ace820ba4050ad63d293a092&oe=5D2B6CBD" }, { "name": "Daisuke Ogushi", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/1780903_10152218421829140_1159984629_n.jpg?_nc_cat=100&_nc_ht=scontent-nrt1-1.xx&oh=8e9eab2a2a64c6a0d1487e1f98dc8d3d&oe=5D35564A" }, { "name": "石上 遼", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/48277897_1427416790725153_4012729292579405824_n.jpg?_nc_cat=110&_nc_ht=scontent-nrt1-1.xx&oh=ba138b3cc1feb266cc53799febe93178&oe=5D77A7B8" }, { "name": "中村邦彰", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c59.0.200.200a/p200x200/10354686_10150004552801856_220367501106153455_n.jpg?_nc_cat=1&_nc_ht=scontent-nrt1-1.xx&oh=08696dc733725ef6a9336522952b2545&oe=5D2978B5" }, { "name": "有岡 克泰", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/57094314_2177222905705036_574117169038622720_n.jpg?_nc_cat=107&_nc_ht=scontent-nrt1-1.xx&oh=9b7bc87ca6c154290485af7fe62b9fc9&oe=5D3CE775" }, { "name": "岡村海紫", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c59.0.200.200a/p200x200/10354686_10150004552801856_220367501106153455_n.jpg?_nc_cat=1&_nc_ht=scontent-nrt1-1.xx&oh=08696dc733725ef6a9336522952b2545&oe=5D2978B5" }, { "name": "岡 俊輔", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/51078331_2133326680062017_4742118145072824320_n.jpg?_nc_cat=109&_nc_ht=scontent-nrt1-1.xx&oh=cb9e3520afc5648c59cb5ab584c48d78&oe=5D77B73F" }, { "name": "山田 光倫", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/15941403_1241663635870168_5544271980719503199_n.jpg?_nc_cat=107&_nc_ht=scontent-nrt1-1.xx&oh=786e8577c366aceec9b0959872257c95&oe=5D293C78" }, { "name": "神﨑 美咲", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/57533046_1553480214782438_7316908222495850496_n.jpg?_nc_cat=109&_nc_ht=scontent-nrt1-1.xx&oh=7ce939766b2bcb04901fdbbad4351dc4&oe=5D76990D" }, { "name": "中野渡 桂", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c0.0.200.200a/p200x200/57262880_2337570229859420_8094210557617373184_n.jpg?_nc_cat=107&_nc_ht=scontent-nrt1-1.xx&oh=26f9e090baf1509cca108ebc4da14412&oe=5D71A693" }, { "name": "今喜夛 周之", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c49.49.618.618a/s200x200/394295_297969136905041_1347931136_n.jpg?_nc_cat=100&_nc_ht=scontent-nrt1-1.xx&oh=f661930ac5df29e75b103cc2d9c93ec4&oe=5D2C0614" }, { "name": "寺井 尚輝", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/148277_852512528204365_1012105038845615524_n.jpg?_nc_cat=111&_nc_ht=scontent-nrt1-1.xx&oh=cbe2825dea6fa8eb92c12e5239a923a7&oe=5D36BFE1" }, { "name": "田中和弘", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/57238975_106158247250659_165725101277315072_n.jpg?_nc_cat=109&_nc_ht=scontent-nrt1-1.xx&oh=59f1fb27e9e6218475b7536736c51d1b&oe=5D745C74" }, { "name": "菊山樹", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/57649041_108311753700950_6350250176682131456_n.jpg?_nc_cat=101&_nc_ht=scontent-nrt1-1.xx&oh=714dacd5165f2d64b922ab7044f5b3aa&oe=5D409D85" }, { "name": "Masafumi Ota", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c50.0.200.200a/p200x200/56691403_101063954421887_7601206676347158528_n.jpg?_nc_cat=109&_nc_ht=scontent-nrt1-1.xx&oh=86a9234878385b380aaa9f440bde6b65&oe=5D31698F" }, { "name": "Takashi Yuasa", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c59.0.200.200a/p200x200/10354686_10150004552801856_220367501106153455_n.jpg?_nc_cat=1&_nc_ht=scontent-nrt1-1.xx&oh=08696dc733725ef6a9336522952b2545&oe=5D2978B5" }, { "name": "高井 昭彦", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/56587610_852797465081818_3887280783991242752_n.jpg?_nc_cat=109&_nc_ht=scontent-nrt1-1.xx&oh=5dc963a72d732946b50b403c8b36dbb1&oe=5D6F332E" }, { "name": "Naoki Fukada", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/44232046_2084169828564497_5412561092574445568_n.jpg?_nc_cat=108&_nc_ht=scontent-nrt1-1.xx&oh=aeac3c488f163c5a1206e9204cd0d0f4&oe=5D40E871" }, { "name": "間 俊介", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c59.0.200.200a/p200x200/10354686_10150004552801856_220367501106153455_n.jpg?_nc_cat=1&_nc_ht=scontent-nrt1-1.xx&oh=08696dc733725ef6a9336522952b2545&oe=5D2978B5" }, { "name": "遠藤 聖也", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c60.60.745.745a/s200x200/48112_210121045792285_20569187_n.jpg?_nc_cat=106&_nc_ht=scontent-nrt1-1.xx&oh=6f3d93b5d0c3c0ee64625849af9d0ec7&oe=5D2B243E" }, { "name": "成枝 隆祐", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c50.50.621.621a/s200x200/535661_102914829841002_976063230_n.jpg?_nc_cat=104&_nc_ht=scontent-nrt1-1.xx&oh=01068ffc19ed653e089be9b02d878d3a&oe=5D6DEC7E" }, { "name": "Mika Sawaguchi", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/22050328_1522146094532895_7106167737157621953_n.jpg?_nc_cat=109&_nc_ht=scontent-nrt1-1.xx&oh=522c6c3bfa153fe2f373cd3a7e657708&oe=5D2A9CC6" }, { "name": "田邊 遼平", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/36048294_1806518092760850_8006469319267450880_n.jpg?_nc_cat=103&_nc_ht=scontent-nrt1-1.xx&oh=af8a1c239a0f877b8399be10d100fb9a&oe=5D739AA8" }, { "name": "古矢 隼", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/13394113_1029364700473285_5357772326518717923_n.jpg?_nc_cat=107&_nc_ht=scontent-nrt1-1.xx&oh=aee51081ba0578ee67b6ab6149429e95&oe=5D2E3056" }, { "name": "谷道 健治", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c59.0.200.200a/p200x200/10354686_10150004552801856_220367501106153455_n.jpg?_nc_cat=1&_nc_ht=scontent-nrt1-1.xx&oh=08696dc733725ef6a9336522952b2545&oe=5D2978B5" }, { "name": "Akihiro Watanabe", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/31960080_10215275643035046_5808709308086484992_n.jpg?_nc_cat=109&_nc_ht=scontent-nrt1-1.xx&oh=5daace505df32474b2a0aef6d75ce804&oe=5D72471F" }, { "name": "Dai Komatsu", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/46518714_365667807529095_102736721526915072_n.jpg?_nc_cat=109&_nc_ht=scontent-nrt1-1.xx&oh=605063e967dfa2ec027af59c17cfd4aa&oe=5D6EB2F0" }, { "name": "杉山圭", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/45541149_346826302753184_103732063017893888_n.jpg?_nc_cat=101&_nc_ht=scontent-nrt1-1.xx&oh=c7b1c6e10774e03815b80a5eaf5869ca&oe=5D753835" }, { "name": "田邊 遼平", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p240x240/36048294_1806518092760850_8006469319267450880_n.jpg?_nc_cat=103&_nc_ht=scontent-nrt1-1.xx&oh=e49b9fdc982a3f71a4d76d97a3b343f7&oe=5D77057D" }, { "name": "菊山樹", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p240x240/57649041_108311753700950_6350250176682131456_n.jpg?_nc_cat=101&_nc_ht=scontent-nrt1-1.xx&oh=0cdc7da77076da7bb3dccf261427a5c1&oe=5D2CE650" }, { "name": "高井 昭彦", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p240x240/56587610_852797465081818_3887280783991242752_n.jpg?_nc_cat=109&_nc_ht=scontent-nrt1-1.xx&oh=84bf57bfc4fce59af1e59760f57784d6&oe=5D715FFB" }, { "name": "Naoki Fukada", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p240x240/44232046_2084169828564497_5412561092574445568_n.jpg?_nc_cat=108&_nc_ht=scontent-nrt1-1.xx&oh=72cd4a317f75554dc77ed5d5db746968&oe=5D70E0A4" }, { "name": "遠藤 聖也", "src": "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c60.60.745.745a/s240x240/48112_210121045792285_20569187_n.jpg?_nc_cat=106&_nc_ht=scontent-nrt1-1.xx&oh=a0491f3e4e599bcdbc55885a32a8ccf7&oe=5D31FD76" }]
window.onload = () => {
    document.getElementById('calcbtn').addEventListener('click', roulettePeople)
}

/**
 * 受け取った配列をシャッフルして返す関数
 * @param {Array} array 入力配列
 * @returns シャッフルした配列
 */
const shuffle = function(array) {
    var i, j, tmp, length;

    for (length = array.length, i = length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    return array;
};

const memberShuffle = () => {
    let outputTxt = "";
    let count = 0;
    // const menberNum = document.getElementById('memberNumber').value
    const menberNum = jsonString.length;
    const teamCapacity = document.getElementById('capa').value
    const teamArray = Array.from(new Array(Number(menberNum))).map((v, i) => i + 1);

    team = shuffle(jsonString);

    for (let index = 0; index < team.length; index++) {
        (index % teamCapacity) ?
        outputTxt += `\t ,${team[index]}`:
            (count++, outputTxt += `\n TEAM[${count}] :\t ${team[index].name}`)
    }
    document.getElementById('output').innerText = outputTxt;
}

const getTeamName = function(i) {
    const AlphaBetNum = 26;
    const charCodeInit = 'A'.charCodeAt(0);
    let n = i;
    let s = "";
    while (n >= 1) {
        n--;
        s = String.fromCharCode(charCodeInit + (n % AlphaBetNum)) + s;
        n = Math.floor(n / AlphaBetNum);
    }
    return s;
}



const roulettePeople = () => {
    const teamCapacity = document.getElementById('capa').value
    let people = shuffle(jsonString);
    count = 0;

    for (let i = 0; i < jsonString.length; i++) {
        (i % teamCapacity) ?
        $(`#teamset${count}`).append(`
            <li>
                <img src="${people[i].src}">
                <span>${people[i].name}<span>
            </li>`):
            (count++, $('#outputul').append(`
            <li class="team">
                <h2 class="teamNo">${getTeamName(count)}.</h2>
                <ul class="team-list" id="teamset${count}">
                    <li>
                        <img src="${people[i].src}">
                        <span>${people[i].name}<span>
                    </li>
                </ul>
            </li>`))

        // console.log(people[i].name, people[i].src)

    }

}

// <ui id="teamset${count}">
// <li class="hoge">
//     <img src="${people[i].src}">
//     <span>${people[i].name}<span>
// </li>
// </ui>