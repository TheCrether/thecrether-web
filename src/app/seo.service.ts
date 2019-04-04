import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SEOService {
	constructor(private title: Title, private meta: Meta) {}

	updateTitle(title: string) {
		this.title.setTitle(title);
	}

	updateOgUrl(url: string) {
		this.meta.updateTag({ name: 'og:url', content: url });
	}

	updateMeta(name: string, content: string) {
		this.meta.updateTag({ name: name, content: content });
	}

	updateDescription(desc: string) {}
}
