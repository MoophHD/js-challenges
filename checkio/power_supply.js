// https://js.checkio.org/mission/power-supply

function powerSupply(network, plants) {
    let touched = [];
  
    Object.keys(plants).forEach(plant => {
      let distance = plants[plant];
      let anchors = [plant];
      let nextAnchors = [];
  
      touched.push(plant);
      while(distance > 0 && anchors.length ) {
        distance--;
  
        network = network.filter(node => {
          for(let i = 0, n = anchors.length; i < n; i++) {
            let a = anchors[i];
            let inNode = node.indexOf(a);
  
            if (inNode != -1) {
              nextAnchors.push(node[inNode == 1 ? 0 : 1]);
              return false
            }
          }
          return true;
        })
  
        anchors = nextAnchors;
        touched.push(...nextAnchors);
        nextAnchors = [];
      }
    });
  
    if (!touched.length) {
      return flatten(network).filter((v, i, self) => self.indexOf(v) == i )
    }
  
    return network
          .filter(n => !(touched.indexOf(n[0]) + 1) || !(touched.indexOf(n[1]) + 1))
          .map(n => n[touched.indexOf(n[0]) + 1 ? 1 : 0 ])
  }
  
  function flatten(array) {
    return array.reduce((accu, current) => accu.concat(current));
  }