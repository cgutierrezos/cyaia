function Tree (){
  	this.nodes=new Array()
  	this.depth=new Array()
	this.arcs=new Array()
	this.values=new Array()
	this.breadth=new Array()
	this.brothers=new Array()
	this.node_cont=0
	this.padre_cont=0
	this.profundidad=0;

	this.generateTree = function(prof){
		if(prof<=this.profundidad){
			var hijos=this.random(1,5)
			var padre=this.padre_cont
			for(i=0; i<hijos;i++){
				this.node_cont+=1
				this.arcs.push([padre,this.node_cont])
				//document.writeln("agrego el arco: ["+padre+","+(node_cont)+"]");
				this.nodes.push(this.node_cont)
				//document.writeln("agrego el nodo: "+(node_cont));+
				this.depth.push(prof)

				this.breadth.push(i)

				this.brothers.push(hijos)
				
			}
			for(i=0;i<hijos;i++){
				this.padre_cont+=1
				this.generateTree(prof+1)
			}
		}
	}

	this.putValues = function(){
		var rand=this.random(-1,this.nodes.length-1)
		for(i=0;i<this.nodes.length;i++){
			if(i==rand)
				this.values.push(true)
			else
				this.values.push(false)
		}
	}

	this.random = function(min, max){
		return min+Math.floor(Math.random()*(max-min+1))
	}

	this.createTree = function(){
		this.profundidad=this.random(5,10)
		this.nodes.push(this.node_cont)
		this.depth.push(0)
		this.breadth.push(0)
		this.generateTree(0)
		this.putValues()
	}




}














