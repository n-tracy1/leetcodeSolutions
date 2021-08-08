/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    //check if input arr has length
    //create an object of pointers to each ll in this input arr
    //mergedList head 
    //currNode var
    //loop bool at true
    //while loop through lists
        //reassign while loop bool to false
        //
        //for loop through our object of lists
            //check if the node we are on in our object of lls is not null, it isn't then reassign our loop bool to true
            //invoke the minvalue helper method
        //once for loop is done and we've found the min
            //assign currnode.next to the new min pointer
            //assign currnode to currnode.next
            //clean currmin
    let index = lists.indexOf(null);
    while (index > -1) {
        lists.splice(index, 1);
        index = lists.indexOf(null);
    }
    if (!lists.length) return null;
    const listCache = {};
    let cacheLength = 0;
    let currMin = Infinity
    let currMinPointer;
    let currMinIndex = 0;
    lists.forEach((el, i) => {
        listCache[i] = el
        cacheLength++;
        if (el.val < currMin) {
            currMin = el.val;
            currMinPointer = el;
            currMinIndex = i;
        };
    });
    const mergedHead = currMinPointer;
    let currNode = mergedHead;
    listCache[currMinIndex] = listCache[currMinIndex].next;
    let loopBool = true;
    while(loopBool) {
        loopBool = false;
        currMin = Infinity;
        for (let i = 0; i < cacheLength; i++) {
            if (listCache[i] !== null) {
                loopBool = true;
                let currNum = listCache[i].val;
                if (currNum < currMin) {
                    currMin = currNum;
                    currMinIndex = i;
                    currMinPointer = listCache[i];
                }
            }
        }
        if (loopBool) {
            currNode.next = currMinPointer;
            currNode = currNode.next;
            listCache[currMinIndex] = listCache[currMinIndex].next; 
        }
    }
    return mergedHead;
};

//top 20% time
//top 78.5% space