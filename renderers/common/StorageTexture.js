import { Texture, LinearFilter } from '../../../../build/three.module.min.js';

class StorageTexture extends Texture {

	constructor( width = 1, height = 1 ) {

		super();

		this.image = { width, height };

		this.magFilter = LinearFilter;
		this.minFilter = LinearFilter;

		this.isStorageTexture = true;

	}
}

export default StorageTexture;
