import { randomUUID } from "crypto";
import { Replace } from "../../helpers/Replace";

export interface IGiftProps {
  userId: string;
  title: string;
  description: string;
  thumbnail?: string;
  link?: string;
  receivedAt?: Date;
  createdAt: Date;
}

export class Gift {
  private _id: string;
  private props: IGiftProps;

  constructor(props: Replace<IGiftProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set userId(userId: string) {
    this.props.userId = userId;
  }

  public get userId(): string {
    return this.props.userId;
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public get title(): string {
    return this.props.title;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get description(): string {
    return this.props.description;
  }

  public set thumbnail(thumbnail: string) {
    this.props.thumbnail = thumbnail;
  }

  public get thumbnail(): string | null {
    return this.props.thumbnail || null;
  }

  public set link(link: string) {
    this.props.link = link;
  }

  public get link(): string | null {
    return this.props.link || null;
  }

  public set receivedAt(receivedAt: Date) {
    this.props.receivedAt = receivedAt;
  }

  public get receivedAt(): Date | null {
    return this.props.receivedAt || null;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
