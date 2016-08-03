import {PLATFORM_DIRECTIVES} from "@angular/core";
import {AppComponent} from "./app.component";
import {MonsterListComponent} from "./monster/monster-list.component";
import {MonsterComponent} from "./monster/monster.component";
import {MonsterEditComponent} from "./monster/monster-edit.component";
import {ChatRoomComponent} from "./chat/chat-room.component";
import {RouterConfig, ROUTER_DIRECTIVES, provideRouter} from "@angular/router";
import {MonsterResolver} from "./monster/monster.resolver";
import {MonsterService} from "./monster/monster.service";

const routes:RouterConfig = [
		{path: '', component: AppComponent},
		{path: 'monster', component: MonsterListComponent},
		{path: 'monster/edit', component: MonsterEditComponent},
		{path: 'monster/edit/:id', component: MonsterEditComponent, resolve: {monster: MonsterResolver}},
		{path: 'monster/:id/:name', component: MonsterComponent},
		{path: 'chat', component: ChatRoomComponent}

	]
	;

export const ROUTER_PROVIDERS = [
	provideRouter(routes),
	MonsterResolver,MonsterService,
	{provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];
