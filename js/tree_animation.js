function TreeAnimation (nodes, arcs, depth, breadth, brothers, w_widht, w_heigth){
  	this.nodes=nodes
	this.arcs=arcs
	this.depth=depth
	this.breadth=breadth
	this.brothers=brothers
	this.w_widht=w_widht
	this.w_heigth=w_heigth
	this.node_cont=0
	this.node_cont_end=this.nodes.length
	this.arc_cont=0
	this.arc_cont_end=this.arcs.length
	this.Aedges=new Array()
	this.Anodes=new Array()


	this.addNode = function(name, depth, breadth, brothers){
		var node=sys.addNode(name,{'alone':false, 'mass':2, 'color':'blue','shape':'dot','label':name});
		this.Anodes.push(node)
	}

	this.addNodes =function(){
		for(i=0;i<nodes.length;i++){
			this.addNode(this.nodes[i], this.depth[i], this.breadth[i], this.brothers[i])
		}
	}

	this.addEdge = function(arc){
		var e=sys.addEdge(arc[0], arc[1], {length:5, pointSize:10, linkcolor:"blue"})
		this.Aedges.push(e)
	}

	this.addEdges = function(){
		for(i=0;i<this.arcs.length;i++){
			this.addEdge(this.arcs[i])
		}
	}

	this.NodeSeleccion= function(node, c){
		sys.tweenNode(node, 4, {color:c, radius:4})
	}

	this.NodeDesseleccion = function(node, c){
		sys.tweenNode(node, 2, {color:c, radius:4})
	}

	this.EdgeSeleccion= function(edge, c){
		sys.tweenEdge(edge, 4 , {linkcolor:c})
	}

	this.EdgeDesseleccion = function(edge, c){
		sys.tweenEdge(edge, 1, {color:c})
	}

	this.p = function(text){
		document.writeln(text)
	}

	this.sleep = function(milliseconds) {
		var start = new Date().getTime();
			for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds){
				break;
			}
		}
	}


	this.animation = function (edges, arcs, nodeF){
		if(this.arc_cont<this.arc_cont_end){
			
			this.NodeSeleccion(arcs[this.arc_cont][0], "red")
			//this.EdgeSeleccion(edges[this.arc_cont], "red")
			//this.EdgeSeleccion(arcs[this.arc_cont])
			this.NodeSeleccion(arcs[this.arc_cont][1], "red")
			this.arc_cont+=1

		}else{
			this.NodeSeleccion(nodeF, "green")
			this.EdgeSeleccion(edges[this.arc_cont], "green")
			
			
		}
		
	}

	

}
