function pairElement(str) {
    return str.slice().split('').map(e => {
        let pair = [e];
        switch (e) {
            case 'A': pair.push('T'); break;
            case 'T': pair.push('A'); break;
            case 'C': pair.push('G'); break;
            case 'G': pair.push('C'); break;
        }
        return pair;
    });
}