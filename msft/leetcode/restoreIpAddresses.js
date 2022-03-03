function restoreIpAddresses(s) {
  let validIps = [];

  let backtrack = (dotLen, path, i) => {

    if (dotLen === 4 && i === s.length) {
        validIps.push(buildStr(path));
        return;
    } else if (dotLen === 4) {
       return;
    }


    for (let segLen = 1; segLen <= 3 && i + segLen <= s.length; segLen++) {
        let ipStr = s.slice(i, i + segLen);
        let ipNum = Number.parseInt(ipStr);

        if (ipNum > 255 || (ipStr.length >= 2 && ipStr.charAt(0) === 0)) {
           break;
        }

        path[dotLen] = ipStr;
        backtrack(dotLen + 1, path, i + segLen);
    }
  }

  backtrack(0, [], 0);
  return validIps;
}

function buildStr(arr) {
  return `${arr[0]}.${arr[1]}.${arr[2]}.${arr[3]}`;
}


console.log(restoreIpAddresses("25525511135"));