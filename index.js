superbowlWin = function (record) {
    let result = record.find(function (record) {return record.result === "W";} );
    return !!result ? result.year : undefined;
}