import NodeMaterial, { addNodeMaterial } from './NodeMaterial.js';

import { MeshBasicMaterial } from '../../../../build/three.module.min.js';

const defaultValues = new MeshBasicMaterial();

class MeshBasicNodeMaterial extends NodeMaterial {

	constructor( parameters ) {

		super();

		this.isMeshBasicNodeMaterial = true;

		this.lights = false;

		this.setDefaultValues( defaultValues );

		this.setValues( parameters );

	}

}

export default MeshBasicNodeMaterial;

addNodeMaterial( 'MeshBasicNodeMaterial', MeshBasicNodeMaterial );
