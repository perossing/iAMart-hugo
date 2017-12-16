// 'state' in this script refers to U.S. State or Canadian Province in iAMart store listings

(function () {
    const stateHeadings = document.querySelectorAll('.state-name')
    let currentState, previousState

    for (let i = 0, maxCount = stateHeadings.length; i < maxCount; i++) {
        currentState = stateHeadings[i].innerHTML
        if (i > 0) previousState = stateHeadings[i - 1].innerHTML

        if (currentState == previousState) {
            stateHeadings[i].setAttribute('class', 'no-state-name')
        }
    }
}())