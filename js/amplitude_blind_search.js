function BusquedaCiegaAmplitud(nodes, arcs, values){

	this.nodes=nodes
	this.arcs=arcs
	this.values=values
	this.queue=new Array()
	this.visited=new Array()
	this.nodoI=this.nodes[0]
	this.arcos_recorridos= new Array()


	this.recorridoAnchura = function() {

		//Lista donde guardo los nodos recorridos

        var recorridos = new Array()

		//El nodo inicial ya está visitado

        this.visited[this.nodoI] = true

		//Se lista el nodo como ya recorrido

        recorridos.push(this.nodoI)

		//Se agrega el nodo a la cola de visitas

        this.queue.push(this.nodoI)

		//Hasta que visite todos los nodos

        while (this.queue.length!=0) {

            var j = this.queue.shift() //Se saca el primero nodo de la cola

            if(this.values[j]){
            	return j
            }
            

		//Se busca en la matriz que representa el grafo los nodos adyacentes

            for (i = 0; i < this.arcs.length; i++) {

		//Si es un nodo adyacente y no está visitado entonces

                if (this.arcs[i][0] == j && !this.visited[this.arcs[i][1]]) {

                	this.arcos_recorridos.push(this.arcs[i])

                    this.queue.push(this.arcs[i][1]);//Se agrega a la cola de visitas

                    recorridos.push(this.arcs[i][1]);//Se marca como recorrido

                    this.visited[this.arcs[i][1]] = true;//Se marca como visitado

                }

            }

        }

        return -1

	}


	
}