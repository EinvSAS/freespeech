function main() {
    // const iframe = window.frames.aac
    // const iframe = document.getElementById("aac");
    // var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
    const iframe = window.document.querySelectorAll('iframe#aac')[0]
    const cnt = iframe.contentWindow.document.getElementByClassName('v-card__title')
    console.log(cnt)
}



setTimeout(() => {
    main()
}, 5000)