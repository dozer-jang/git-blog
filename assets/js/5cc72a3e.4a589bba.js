(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(92)),c=n(95),i={slug:"welcome",title:"Kubernetes Networking (1)",author:"Dozer",author_title:"Dozer",author_url:"https://github.com/dozer-jang",author_image_url:"https://raw.githubusercontent.com/dozer-jang/dozer-jang.github.io/main/static/img/author/author.png",tags:["Kubernetes","Network","Pod","CNI"]},b={permalink:"/git-blog/welcome",source:"@site/blog/2021-04-28-Kubernetes Networking(1).mdx",description:"\ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \uacf5\ubd80\ud558\uba74\uc11c CNI\uac00 \ub3c4\ub300\uccb4 \ubb34\uc5c7\uc778\uc9c0 \uad81\uae08\ud574\uc11c \uc5ec\ub7ec \uac00\uc9c0 \uc790\ub8cc\ub97c \ucde8\ud569\ud558\ub2e4\uac00 \ud55c\ubc88 \ud750\ub984\ub300\ub85c \uc815\ub9ac\ud560 \ud544\uc694\ub97c \ub290\uaef4\uc11c \uc791\uc131\ud55c \uae00\uc785\ub2c8\ub2e4. \uc798\ubabb\ub41c \ub0b4\uc6a9\uc774 \uc804\ub2ec\ub420 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4.",date:"2021-04-28T00:00:00.000Z",formattedDate:"April 28, 2021",tags:[{label:"Kubernetes",permalink:"/git-blog/tags/kubernetes"},{label:"Network",permalink:"/git-blog/tags/network"},{label:"Pod",permalink:"/git-blog/tags/pod"},{label:"CNI",permalink:"/git-blog/tags/cni"}],title:"Kubernetes Networking (1)",truncated:!1,nextItem:{title:"Test",permalink:"/git-blog/2021/03/30/Test"}},p=[],l={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \uacf5\ubd80\ud558\uba74\uc11c CNI\uac00 \ub3c4\ub300\uccb4 \ubb34\uc5c7\uc778\uc9c0 \uad81\uae08\ud574\uc11c \uc5ec\ub7ec \uac00\uc9c0 \uc790\ub8cc\ub97c \ucde8\ud569\ud558\ub2e4\uac00 \ud55c\ubc88 \ud750\ub984\ub300\ub85c \uc815\ub9ac\ud560 \ud544\uc694\ub97c \ub290\uaef4\uc11c \uc791\uc131\ud55c \uae00\uc785\ub2c8\ub2e4. ",Object(a.b)("strong",{parentName:"p"},"\uc798\ubabb\ub41c \ub0b4\uc6a9\uc774 \uc804\ub2ec\ub420 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),Object(a.b)("p",null,"\uc544\ub798 \ub0b4\uc6a9\uc740 A Guide to the Kubernetes Networking Model\ub97c \ub9e4\uc6b0 \ub9ce\uc774 \ucc38\uc870\ud588\ub2e4."),Object(a.b)("p",null,"\uc77c\ub2e8 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c \ub9d0\ud558\ub294 \ud074\ub7ec\uc2a4\ud130 \ub124\ud2b8\uc6cc\ud0b9\uc5d0\ub294 \ub124 \uac00\uc9c0 \uc885\ub958\uac00 \uc874\uc7ac\ud55c\ub2e4. "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Highly-coupled container-to-container communications"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Pod-to-Pod communications")),Object(a.b)("li",{parentName:"ol"},"Pod-to-Service communications"),Object(a.b)("li",{parentName:"ol"},"External-to-Service communications")),Object(a.b)("p",null,"\uc774\ubc88\uc5d0 \uc0b4\ud3b4\ubcfc \ubd80\ubd84\uc740 ",Object(a.b)("strong",{parentName:"p"},"Pod-to-Pod")," \ub124\ud2b8\uc6cc\ud0b9\uc774\ub2e4. Pod to Pod \ub124\ud2b8\uc6cc\ud0b9\uc5d0\ub294 \uc138 \uac00\uc9c0 \uc6d0\uce59\uc774 \uc874\uc7ac\ud55c\ub2e4. \uadf8 \uc911 \uccab \ubc88\uc9f8 \ud2b9\uc9d5\uc778 \ubaa8\ub4e0 Pod\ub294 \uc5b4\ub290 Node(VM)\uc788\ub294 Pod\ub4e4\uacfc \ud1b5\uc2e0\ud560 \ub54c NAT\ub97c \ud544\uc694\ub85c \ud558\uc9c0 \uc54a\ub294\ub2e4 \uac83\uc774 \uac00\uc7a5 \ud575\uc2ec\uc801\uc778 \ubd80\ubd84\uc774\ub77c\uace0 \ud560 \uc218 \uc788\ub294\ub370 \uc774 \uae00\uc740 \uadf8 \ubd80\ubd84\uc5d0 \ub300\ud574\uc11c \uc0b4\ud3b4\ubcf8\ub2e4."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"pods on a node can communicate with all pods on all nodes without NAT")),Object(a.b)("li",{parentName:"ul"},"agents on a node (e.g. system daemons, kubelet) can communicate with all pods on that node")),Object(a.b)("p",null,"Note: For those platforms that support\xa0",Object(a.b)("inlineCode",{parentName:"p"},"Pods"),"\xa0running in the host network (e.g. Linux):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"pods in the host network of a node can communicate with all pods on all nodes without NAT"),Object(a.b)("p",{parentName:"li"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub178\ub4dc\ub97c \uc774\ub8e8\ub294 \ud558\ub098\uc758 VM\uc744 \uc0dd\uac01\ud574\ubcf4\uc558\uc744 \ub54c \ub2e4\uc74c\uacfc \uac19\uc774 ",Object(a.b)("inlineCode",{parentName:"p"},"eht0"),"\uac00 \ubd99\uc5b4\uc788\ub294 \uacbd\uc6b0\ub97c \uc77c\ubc18\uc801\uc73c\ub85c \ub5a0\uc62c\ub9b4 \uc218 \uc788\ub2e4. \ub9ac\ub205\uc2a4 \ub0b4\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \ud504\ub85c\uc138\uc2a4\ub4e4\uc774 \uc678\ubd80\uc640 \ud1b5\uc2e0\ud560 \ub54c \ubcf4\ud1b5 \uc774 ",Object(a.b)("inlineCode",{parentName:"p"},"eth0")," \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc774\uc6a9\ud574\uc11c \ub098\uac00\uac8c \ub41c\ub2e4."))),Object(a.b)("p",{align:"center"},Object(a.b)("img",{alt:"1.png",src:Object(c.a)("/img/post/kubernetes-networking/1.png")})),Object(a.b)("p",null," \uc0ac\uc2e4 VM\uc5d0 \ubd99\uc5b4\uc788\ub294 ",Object(a.b)("inlineCode",{parentName:"p"},"eth0"),"\uc758 \uacbd\uc6b0 \uc5c4\ubc00\ud788\ub294 root network namespace\uc5d0 \uc874\uc7ac\ud55c\ub2e4\uace0 \ub9d0\ud560 \uc218 \uc788\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c namespace\ub780 \uc6a9\uc5b4\uac00 \uaca9\ub9ac\ub41c \ud658\uacbd\uc744 \uc81c\uacf5\ud558\ub294 \uc758\ubbf8\ub85c \uc4f0\uc774\ub4ef, root network namespace\ub780 VM \ub0b4\ubd80\uc758 \ubaa8\ub4e0 \ud504\ub85c\uc138\uc2a4\ub4e4\uc774 \uc0ac\uc6a9\ud558\ub294 \ub124\ud2b8\uc6cc\ud06c \ud658\uacbd\uc774\ub2e4. "),Object(a.b)("p",{align:"center"},Object(a.b)("img",{alt:"2.png",src:Object(c.a)("/img/post/kubernetes-networking/2.png")})),"\uc774\uc81c \uc774 VM\uc5d0 Pod\uac00 \uc874\uc7ac\ud558\ub294 \uc0c1\ud669\uc744 \uac00\uc815\ud574\ubcfc \uac83\uc774\ub2e4.",Object(a.b)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uacf5\uc2dd \ubb38\uc11c\uc758 Pod\uc5d0 \ub300\ud55c \uc124\uba85\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ubb38\uc7a5\uc774 \uc788\ub2e4."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The shared context of a Pod is a set of Linux namespaces, cgroups, and potentially other facets of isolation. ",Object(a.b)("em",{parentName:"p"},"(\uc0dd\ub7b5)"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Pod\uc758 \uacf5\uc720 \ucee8\ud14d\uc2a4\ud2b8\ub294 Linux namespace, cgroup \ubc0f \uc7a0\uc7ac\uc801\uc73c\ub85c \ub2e4\ub978 \uaca9\ub9ac \uce21\uba74\uc758 \uc9d1\ud569\uc774\ub2e4.")),Object(a.b)("p",null,"\ubc88\uc5ed\uc744 \uc815\ud655\ud788 \uc774\ud574\ud558\uae30 \uc5b4\ub835\uc9c0\ub9cc, Pod\ub294 \uc704\uc5d0\uc11c \uc5b8\uae09\ud55c \uae30\uc220\ub4e4\ub85c \uc77c\uc885\uc758 \uaca9\ub9ac\ub41c \ud658\uacbd\uc5d0\uc11c \uad6c\uc131\ub41c\ub2e4\uace0 \uc0dd\uac01\ud574\ubcf8\ub2e4."),Object(a.b)("p",null,"\uadf8\ub807\ub2e4\uba74 VM\uc5d0 \ud558\ub098\uc758 Pod A\uac00 \uc874\uc7ac\ud55c\ub2e4\uba74 Pod A\uc740 Root network namespace\uc640\ub294 \ub3c5\ub9bd\uc801\uc778 Pod A network namespace\uc5d0 \uc874\uc7ac\ud55c\ub2e4. "),Object(a.b)("p",null," \uc880 \ub354 \ub098\uc544\uac00\uc11c \uc544\ub798 \uadf8\ub9bc\uacfc \uac19\uc774 Pod A\uc5d0 Container1(Ctr1)\uacfc Container2(Ctr2)\uac00 \ub3d9\uc2dc\uc5d0 \uc874\uc7ac\ud558\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc0c1\ud669\uc744 \uac00\uc815\ud574\ubcf4\uc790. Pod\uc5d0 \uc874\uc7ac\ud558\ub294 \ucee8\ud14c\uc774\ub108\ub4e4\uc740 Pod\uc5d0 \ud560\ub2f9\ub41c network namespace\uc744 \uc11c\ub85c \uacf5\uc720\ud558\uace0 \ud574\ub2f9 Pod network namespace\uc5d0 \ud560\ub2f9\ub41c IP\uc640 port space\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4. \uc989 \uc774\ub294 \uac19\uc740 Pod\uc548\uc758 \ucee8\ud14c\uc774\ub108\ub4e4\uc740 \uc11c\ub85c\ub97c ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:port")," \ub97c \ud1b5\ud574\uc11c \ud1b5\uc2e0\uc774 \uac00\ub2a5\ud558\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. "),Object(a.b)("p",{align:"center"},Object(a.b)("img",{alt:"3.png",src:Object(c.a)("/img/post/kubernetes-networking/3.png")})),"\ub2e4\uc2dc Pod\uc758 \ub124\ud2b8\uc6cc\ud06c\ub97c \uc0dd\uac01\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",Object(a.b)("p",null,' \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c Pod\ub294 \ubaa8\ub450 \uac01\uc790\uc758 IP\ub97c \uac16\uace0 \uc788\uace0 \uac01\uc790\uc758 Pod\ub4e4\uc740 IP\ub97c \uc774\uc6a9\ud574\uc11c \ud1b5\uc2e0\ud55c\ub2e4. \uc774\uac83\uc744 "IP-per-Pod"\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4. \uadf8\ub7f0\ub370 Pod\ub294 IP\ub97c \ud1b5\ud574 \uc11c\ub85c \ud1b5\uc2e0\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc740 \uc5b4\ub5a4 \uc758\ubbf8\uc77c\uae4c\uc694? '),Object(a.b)("p",null," \uc77c\ub2e8 Pod\uac00 \uac19\uc740 VM\uc5d0 \uc788\ub294 \ub2e4\ub978 Pod\uc5d0 \ud1b5\uc2e0\ud558\ub824\ub294 \uacbd\uc6b0\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Pod\uc5d0\uac90 \uace0\uc720\ud55c network namespace\uac00 \uc874\uc7ac\ud558\uace0, \uc774 Pod network namespace\uc640 VM\ub0b4\ubd80\uc758 \ub2e4\ub978 network namespace\ub97c \uc5f0\uacb0\ud558\uae30 \uc704\ud574 \uac00\uc0c1\uc758 \uc774\ub354\ub137 \ucf00\uc774\ube14\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. veth pair",Object(a.b)("em",{parentName:"p"},"(Virtual Ethernet Device)"),"\ub77c\uace0 \ubd88\ub9ac\ub294 \uc774 \uc778\ud130\ud398\uc774\uc2a4\ub294 \uc11c\ub85c \ub2e4\ub978 namespace\ub97c \uc5f0\uacb0\ud558\uae30 \uc704\ud574 \ud55c \uc30d\uc744 \uc774\ub8e8\ub294 \ud615\ud0dc\ub85c \uc874\uc7ac\ud569\ub2c8\ub2e4. \uc544\ub798 \uadf8\ub9bc\uacfc \uac19\uc774 \ud55c \uc30d\uc758 veth pair\ub97c \uc0dd\uc131\ud574\uc11c \ud55c \ucabd\uc740 VM\uc758 root network namespace\uc5d0 \uc5f0\uacb0\ud558\uace0, \ud55c\ucabd\uc740 Pod A\uc758 network namespace\uc5d0 \uc5f0\uacb0\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uac19\uc740 \uc791\uc5c5\uc744 Pod B\uc5d0\ub3c4 \ub3d9\uc77c\ud558\uac8c \uc801\uc6a9\ud558\uaca0\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{alt:"4.png",src:Object(c.a)("/img/post/kubernetes-networking/4.png")})),"\uc774\uc81c Pod A\uc640 Pod B \ubaa8\ub450 root network namespace\uc5d0 \ud2b8\ub798\ud53d\uc744 \ubcf4\ub0bc \uc218 \uc788\uc9c0\ub9cc, \uc11c\ub85c\uac00 \ud1b5\uc2e0\uc774 \ub418\ub294 \uc0c1\ud0dc\ub294 \uc544\ub2d9\ub2c8\ub2e4. veth1, veth3 \ubaa8\ub450 \uadf8\uc800 root network namespace\uc5d0 \uc874\uc7ac\ud560 \ubfd0\uc785\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574\uc11c\ub294 Linux Ethernet Bridge\ub97c VM \ub0b4\ubd80\uc5d0 \uc0dd\uc131\ud569\ub2c8\ub2e4. Linux Ethernet Bridge\ub294 \uc6b0\ub9ac\uac00 \ud754\ud788 \uc54c\uace0 \uc788\ub294 Layer 2\uc758 \ub124\ud2b8\uc6cc\ud06c \ub514\ubc14\uc774\uc2a4\uc778 \uc2a4\uc704\uce58\uc758 \uc5ed\ud560\uc785\ub2c8\ub2e4.",Object(a.b)("p",null," \uc544\ub798\uc640 \uac19\uc774 br0 Bridge\ub97c root network namespace\uc5d0 \uc0dd\uc131\ud574\uace0 veth1, veth3\ub97c br0\uc5d0 \ubd99\uc778\ub2e4. \uadf8\ub9ac\uace0 Pod A\uc5d0\uc11c Pod B\ub85c \uc694\uccad\uc744 \ubcf4\ub0bc \uacbd\uc6b0\ub97c \uc0dd\uac01\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{alt:"5.png",src:Object(c.a)("/img/post/kubernetes-networking/5.png")})),"1) Pod A\uc5d0\uc11c \uc790\uc2e0\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub85c veth0\ub85c \ud328\ud0b7\uc744 \ubcf4\ub0b8\ub2e4. \ud574\ub2f9 \ud328\ud0b7\uc740 veth \ud55c \uc30d\uc758 \ubc18\ub300\ucabd\uc778 root ns\uc758 veth1\uc73c\ub85c \ud750\ub974\uac8c \ub41c\ub2e4. 2,3) veth1\uc740 bridge\uc778 br0\uc640 \uc5f0\uacb0\ub418\uc5b4\uc788\uc73c\ubbc0\ub85c br0\ub294 \uc5f0\uacb0\ub418\uc5b4\uc788\ub294 \ubaa8\ub4e0 \uc778\ud130\ud398\uc774\uc2a4\ub4e4\uc5d0\uac8c ARP \ud504\ub85c\ud1a0\ucf5c\uc744 \ud1b5\ud574 10.0.0.3\uc758 \ub9e5\uc5b4\ub4dc\ub808\uc2a4\ub97c \ucc3e\ub294\ub2e4. 4) \uadf8\ub807\uac8c veth2\uac00 10.0.0.3\uc784\uc744 \uc54c\uac8c \ub418\uace0 veth2\ub85c \ud328\ud0b7\uc744 \ud3ec\uc6cc\ub529\ud55c\ub2e4.",Object(a.b)("p",{align:"center"},Object(a.b)("img",{alt:"6.png",src:Object(c.a)("/img/post/kubernetes-networking/6.png")})),"*\uc704 \uadf8\ub9bc\uc5d0\uc11c veth0\uc740 eth0\ub85c \uc774\ub984\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 VM\uc758 eth0\uc640 \uad6c\ubd84\ud558\uae30 \uc704\ud574\uc11c vethN\uc73c\ub85c \ud45c\uc2dc\ud588\uc2b5\ub2c8\ub2e4. eth0(veth0)\uc740 \uadf8\uc800 veth\ud0c0\uc785\uc758 \uc774\ub354\ub137 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc774\ub984\uc774 eth0\uc778 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.*",Object(a.b)("p",null," \uc815\ub9ac\ud558\uc790\uba74 Pod\ub4e4\uc740 \uc790\uc2e0\ub4e4\uc758 eth0 \uc778\ud130\ud398\uc774\uc2a4\ub9cc\uc744 \ud1b5\ud574\uc11c\ub3c4 \ub2e4\ub978 Pod\uc640 \uc790\uc720\ub86d\uac8c \ud1b5\uc2e0\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\uac74 \ubcf4\ud1b5\uc758 \uc6b0\ub9ac\uac00 \uc608\uc0c1\ud558\ub294 \ub124\ud2b8\uc6cc\ud06c\uc758 \ub3d9\uc791\uacfc \uac19\uc2b5\ub2c8\ub2e4. "),Object(a.b)("p",null,"\ud558\uc9c0\ub9cc Node\ub4e4\uc774 \uc5ec\ub7ec \ub300\uc77c \uacbd\uc6b0\ub294 \uc5b4\ub5a8\uae4c\uc694?"),Object(a.b)("p",null," \uc544\ub798\ucc98\ub7fc \ub450\uac1c\uc758 VM\uac00 \uc874\uc7ac\ud558\uace0 VM 1\uc758 Pod A(10.0.0.2)\uc5d0\uc11c VM 2\uc758 Pod B(10.0.1.5)\ub85c \ud1b5\uc2e0\ud558\ub294 \uacbd\uc6b0\ub97c \uc0dd\uac01\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. 1) Pod A\uc758 eht0(veth0)\uc5d0\uc11c veth1\ub85c \ud328\ud0b7\uc744 \ubcf4\ub0b4\uace0 2) veth1\uc740 \uc5f0\uacb0\ub41c bridge\uc778 br0\uc5d0 \ud328\ud0b7\uc744 \ubcf4\ub0c5\ub2c8\ub2e4. 3) br0\uc740 \ubaa9\uc801\uc9c0\uc778 10.0.1.5\uc5d0 \ub300\ud574\uc11c ARP \ud504\ub85c\ud1a0\ucf5c\uc744 \uc218\ud589\ud558\uc9c0\ub9cc \ud574\ub2f9\ud558\ub294 IP\ub97c \uac16\ub294 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc5c6\uc73c\ubbc0\ub85c \uc2e4\ud328\ud558\uace0 default gateway\uc778 VM 1\uc758 eth0\uc5d0 \ud328\ud0b7\uc744 \uc62c\ub9bd\ub2c8\ub2e4. 4,5) \ud558\uc9c0\ub9cc VM 1\uc744 \ub5a0\ub09c \ud328\ud0b7\uc740 \uc5b4\ub514\uc5d0\ub3c4 \uac00\uc9c0 \ubabb\ud569\ub2c8\ub2e4. \uc65c\ub0d0\uba74 \ubcf4\ud1b5 VM\ub4e4\uc740 anti-spoofing protection\uc774 \ud65c\uc131\ud654\ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4. anti-spoofing\uc740 \ub124\ud2b8\uc6cc\ud06c\uac00 \uc54c\uace0\uc788\uc9c0 \uc54a\uc740 source IP\ub97c \uac00\uc9c4 \ud328\ud0b7\uc740 \ub4dc\ub78d\uc2dc\ud0a4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c source IP\ub294 Pod A\uc758 10.0.0.2\uc774\uace0 \uc774 IP\ub294 VM\uc758 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c\ub294 \uc54c\uc9c0 \ubabb\ud558\ub294 IP\uc785\ub2c8\ub2e4. ",Object(a.b)("em",{parentName:"p"},"(\ubcf4\ud1b5\uc758 CSP\ub4e4\uc740 VM\uc5d0 anti-spoofing protection\uc774 \ud65c\uc131\ud654\ub418\uc5b4\uc788\ub2e4. \ud558\uc9c0\ub9cc GKE\uc640 \uac19\uc740 \ub9e4\ub2c8\uc9c0\ub4dc \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud574\uc11c k8s \ud074\ub7ec\uc2a4\ud130\ub97c \uc0dd\uc131\ud560 \ub54c\ub294 VM\uc758 anti-spoofing protection\uc744 \ube44\ud65c\uc131\ud654\ud574\uc11c \uc81c\uacf5\ud569\ub2c8\ub2e4.).")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{alt:"7.png",src:Object(c.a)("/img/post/kubernetes-networking/7.png")})),"\uadf8\ub807\ub2e4\uba74 GCP\uc758 \uc608\ub97c \uc774\uc5b4\uc11c, \ub2e4\uc74c\uacfc \uac19\uc740 \uba85\ub839\uc5b4\ub97c \uc774\uc6a9\ud588\ub2e4\uace0 \uac00\uc815\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"$ gcloud compute instances create vm2 --can-ip-forward\n$ gcloud compute routes create vm2 --destination-range=10.0.1.0/24 --next-hop-instacne=vm2\n")),Object(a.b)("p",null,"\uccab \ubc88\uc9f8 \uba85\ub839\uc5b4\ub294 VM\uc744 \uc0dd\uc131\ud560\ub54c anti-spoofing\uc744 \ube44\ud65c\uc131\ud654\ud558\uaca0\ub2e4\ub294 \uac83\uc774\uace0 \ub450 \ubc88\uc9f8 \uba85\ub839\uc5b4\ub294 \ubaa9\uc801\uc9c0\uac00 10.0.1.0/24 \ub300\uc5ed\uc5d0 \uc18d\ud558\uba74 VM 2\uc73c\ub85c \ud328\ud0b7\uc744 \ud3ec\uc6cc\ub529\ud558\ub77c\ub294 \ub73b\uc785\ub2c8\ub2e4."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{alt:"8.png",src:Object(c.a)("/img/post/kubernetes-networking/8.png")})),"\uadf8\ub807\ub2e4\uba74 \ub2e4\uc2dc \ub3cc\uc544\uc640\uc11c \uc774\uc81c\ub294 \uc815\uc0c1\uc801\uc73c\ub85c  Pod A\uc5d0\uc11c Pod D\ub85c \ud328\ud0b7\uc774 \uc804\uc1a1 \uac00\ub2a5\ud569\ub2c8\ub2e4. 3)\uae4c\uc9c0\uc758 \uc0c1\ud669\uc740 \uc774\uc804 \uadf8\ub9bc\uacfc \uac19\uae30 \ub54c\ubb38\uc5d0 \ubcc0\uacbd\ub41c \ubd80\ubd84\ubd80\ud130 \uc0b4\ud3b4\ubcf4\uc790\uba74 4) \ud328\ud0b7\uc774 \uc815\uc0c1\uc801\uc73c\ub85c VM 1\uc744 \ub5a0\ub098\uac8c \ub418\uace0 5)\uc704\uc5d0\uc11c \uc124\uc815\ud55c \ub77c\uc6b0\ud305 \uaddc\uce59\uc5d0 \ub530\ub77c\uc11c VM 2\ub85c \ud3ec\uc6cc\ub529 \ub429\ub2c8\ub2e4. 6)\uadf8\ub7fc VM 2\uc758 eht0 \ub4e4\uc5b4\uc628 \ud328\ud0b7\uc740 br0 bridge\ub85c \uc804\ud574\uc9c0\uace0 7) br0\uc758 ARP \ud504\ub85c\ud1a0\ucf5c\uc774 \uc131\uacf5\ud558\uace0 8) \ubaa9\uc801\uc9c0\uc778 Pod D\ub85c \ud328\ud0b7\uc774 \uc804\ub2ec\ub429\ub2c8\ub2e4.",Object(a.b)("p",null,"\uc5ec\uae30\uc11c \ub2e4\uc2dc \ud55c\ubc88 \uc8fc\ubaa9\ud560 \uc810\uc740 \ud328\ud0b7\uc758 source, destination\uc774 \ubc14\ub00c\uc9c0 \uc54a\uc558\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\uac74 \ubcf4\ud1b5\uc758 \uc6b0\ub9ac\uac00 \uc0dd\uac01\ud558\ub294 \ub124\ud2b8\uc6cc\ud06c\uc758 \uc815\uc0c1\uc801\uc778 \uc791\ub3d9\uc785\ub2c8\ub2e4."),Object(a.b)("p",null,"\ud558\uc9c0\ub9cc \uc544\uc9c1 \uc544\uc26c\uc6b4 \uc124\uba85\ub4e4\uc774 \ub9ce\ub2e4. VM(Node)\uc640  Pod \ubaa8\ub450 ephemeral \uc131\uaca9\uc744 \uac16\uc2b5\ub2c8\ub2e4. \uadf8 \ub9d0\uc778\uc989\uc2a8 Pod\ub294 \uc0ac\ub77c\uc84c\ub2e4\uac00 \ub2e4\uc2dc \ub744\uc6cc\uc9c8 \uc218\ub3c4 \uc788\uace0, VM \ub610\ud55c \ub9ac\uc18c\uc2a4\uac00 \ud544\uc694\ud560 \uc2dc \ub298\uc5b4\ub0a0 \uc218 \uc788\uace0 \ub610 \ubc18\ub300\ub85c \uc904\uc5b4\ub4e4 \uc218\ub3c4 \uc788\uc8e0. "),Object(a.b)("p",null,"\uadf8\ub807\ub2e4\uba74 \uc0c8\ub85c \ub728\ub294 VM\uc5d0 \uc874\uc7ac\ud558\ub294 Pod\ub4e4\uc740 \uc5b4\ub5a4 IP\ub300\uc5ed\ub300\ub97c \uac16\uace0 \uc788\uc744\uae4c\uc694? \uadf8\ub9ac\uace0 \uadf8 \uc815\ubcf4\ub97c \ub9e4\ubc88 VM \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc54c\ub824\uc918\uc57c \ud560\uae4c\uc694? "),Object(a.b)("p",null,"\ub2e4\uc74c \uae00\uc5d0\uc11c \uc880 \ub354 CNI\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf4\uaca0\ub2e4."),Object(a.b)("p",null,"Ref."),Object(a.b)("p",null,"The ins and outs of networking in Google Container Engine and Kubernetes (Google Cloud Next '17)\n",Object(a.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=y2bhV81MfKQ&list=WL&index=16"},"https://www.youtube.com/watch?v=y2bhV81MfKQ&list=WL&index=16")),Object(a.b)("p",null,"A Guide to the Kubernetes Networking Model - Kevin Sookocheff"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/"},"https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/networking/"},"https://kubernetes.io/docs/concepts/cluster-administration/networking/")))}u.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var o=n(15),r=n(97);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.default)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+c:c}(t,e,n,o)}}function c(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},97:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))}}]);