let tabdis = "Google Classroom"

function refresh(){
    if (tabdis != "Nothing") {
        if (tabdis == "Google Classroom") {
            document.title = "Google Classroom"
            link = document.createElement('link');
            link.rel = 'tab/1200px-Google_Classroom_icon.svg.png';
        }
    }
}

refresh()