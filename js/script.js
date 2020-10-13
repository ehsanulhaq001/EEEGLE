function makeUrl() {
    let query = document.getElementById("inputQuery").value;
    let url = `https://www.google.co.in/search?client=safari&source=hp&ei=QYKFX_SlLrnA3LUPspeE2AU&q=${query}&oq=${query}&gs_lcp=CgZwc3ktYWIQDDILCC4QsQMQyQMQkwIyBQgAELEDMgUILhCxAzICCC4yAgguMgcIABCxAxAKMgIIADICCC4yAggAMgIIADoOCAAQ6gIQtAIQmgEQ5QI6CwgAELEDEIMBEMkDOggIABCxAxCDAToICC4QsQMQgwE6DggAELEDEIsDEKgDEKcDOggILhCxAxCTAkoFCAcSATFKBQgIEgExUPUNWNwRYPJcaAFwAHgAgAHKAogB9geSAQcwLjMuMS4xmAEAoAEBqgEHZ3dzLXdperABBrgBAg&sclient=psy-ab&ved=0ahUKEwi0yr_2rrHsAhU5ILcAHbILAVsQ4dUDCAo`
    return url;
}

function searchGoogle() {
    if (document.getElementById("inputQuery").value) location.replace(makeUrl());
}