import { Migration } from '@mikro-orm/migrations';

export class Migration20200826194141 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "name" text not null, "email" text not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
  }

}
