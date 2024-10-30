export interface ChatMessage {
  role: string;
  content: string;
}

export interface ChatTurn {
  name: string;
  avatar: string;
  image: string | null;
  message: string;
  responseId: string;
  chat_history: ChatMessage[];
  session_id: string | null;
  status: "waiting" | "done";
  type: "user" | "assistant";
};

export enum ChatType {
  Grounded,
  Visual,
  Video,
  Chat
};

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  brand: string;
  description: string;
  slug: string;
  manual: string;
  images: string[];
};

export interface ProductGroup {
    name: string;
    slug: string;
    description: string;
    products: Product[];
};

export interface Citation {
  index: number;
  productId: number;
  slug: string;
  chunk: string;
  manual: string;
  replace: string;
};

export interface GroundedMessage {
  message: string;
  citations: Citation[];
  responseId: string;
};

export interface MessageFeedback {
  responseId: string
  feedback: number
  extra: Record<string, any>
}