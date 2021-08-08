var mergeTwoLists = function(l1, l2) {
    //two pointers for each list currnode
    //new list head
    //currpointer of new list
    //while both points aren't null
        //check which value is smaller
        //push smaller node onto the new linked list
        //if one of the pointers is null, just push the rest of the other list
            //then return new list head
    let node1 = l1;
    let node2 = l2;
    let mergedHead;
    if (l1 === null && l2 === null) return null
    else if (l1 === null) return l2;
    else if (l2 === null) return l1;
    (l1.val < l2.val) ? mergedHead = l1 : mergedHead = l2;
    if (node1 === mergedHead) node1 = node1.next;
    else node2 = node2.next;
    let currPointer = mergedHead;
    while (node1 || node2) {
        if (node1 === null) {
            currPointer.next = node2;
            return mergedHead;
        }
        else if (node2 === null) {
            currPointer.next = node1;
            return mergedHead;
        }
        else if (node1.val < node2.val) {
            currPointer.next = node1;
            currPointer = node1;
            node1 = node1.next;
        }
        else if (node1.val >= node2.val) {
            currPointer.next = node2;
            currPointer = node2;
            node2 = node2.next
        }
    }
};

//top 83% time
//top 99.83% space