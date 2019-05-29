domReady.on(function () {
    let counter = 0;

    function klickMich(counter) {
        console.info("Called klickMich: " + counter);
    }

    let klickMichDebouncedTrue = _.debounce(klickMich, 1000, true);
    let klickMichDebouncedFalse = _.debounce(klickMich, 1000, false);
    let klickMichThrottledBoth = _.throttle(klickMich, 1000);
    let klickMichThrottledLeading = _.throttle(klickMich, 1000, {
        trailing: false
    });
    let klickMichThrottledTrailing = _.throttle(klickMich, 1000, {
        leading: false
    });

    document.getElementById("normalbutton").onclick = function () {
        klickMich(++counter);
    }

    document.getElementById("debounced1000tbutton").onclick = function () {
        klickMichDebouncedTrue(++counter);
    }

    document.getElementById("debounced1000fbutton").onclick = function () {
        klickMichDebouncedFalse(++counter);
    }

    document.getElementById("throttledbothbutton").onclick = function () {
        klickMichThrottledBoth(++counter);
    }

    document.getElementById("throttledleadingbutton").onclick = function () {
        klickMichThrottledLeading(++counter);
    }

    document.getElementById("throttledtrailingbutton").onclick = function () {
        klickMichThrottledTrailing(++counter);
    }
});