import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

/** The root entry point into the Graph */
export interface RootQuery {
  readonly __typename: 'RootQuery';
  /**
   * Entry point to get all settings for the site
   * @deprecated
   */
  readonly allSettings: Maybe<Settings>;
  /**
   * The cart object
   * @deprecated
   */
  readonly cart: Maybe<Cart>;
  /**
   * The cart object
   * @deprecated
   */
  readonly cartFee: Maybe<CartFee>;
  /**
   * The cart object
   * @deprecated
   */
  readonly cartItem: Maybe<CartItem>;
  /**
   * Connection between the RootQuery type and the category type
   * @deprecated
   */
  readonly categories: Maybe<RootQueryToCategoryConnection>;
  /**
   * A 0bject
   * @deprecated
   */
  readonly category: Maybe<Category>;
  /**
   * Returns a Comment
   * @deprecated
   */
  readonly comment: Maybe<Comment>;
  /**
   * Connection between the RootQuery type and the Comment type
   * @deprecated
   */
  readonly comments: Maybe<RootQueryToCommentConnection>;
  /**
   * A node used to manage content
   * @deprecated
   */
  readonly contentNode: Maybe<ContentNode>;
  /**
   * Connection between the RootQuery type and the ContentNode type
   * @deprecated
   */
  readonly contentNodes: Maybe<RootQueryToContentNodeConnection>;
  /**
   * Fetch a Content Type node by unique Identifier
   * @deprecated
   */
  readonly contentType: Maybe<ContentType>;
  /**
   * Connection between the RootQuery type and the ContentType type
   * @deprecated
   */
  readonly contentTypes: Maybe<RootQueryToContentTypeConnection>;
  /**
   * A coupon object
   * @deprecated
   */
  readonly coupon: Maybe<Coupon>;
  /**
   * Connection between the RootQuery type and the Coupon type
   * @deprecated
   */
  readonly coupons: Maybe<RootQueryToCouponConnection>;
  /**
   * A customer object
   * @deprecated
   */
  readonly customer: Maybe<Customer>;
  /**
   * Connection between the RootQuery type and the Customer type
   * @deprecated
   */
  readonly customers: Maybe<RootQueryToCustomerConnection>;
  /** @deprecated  */
  readonly discussionSettings: Maybe<DiscussionSettings>;
  /**
   * A simple product object
   * @deprecated
   */
  readonly externalProduct: Maybe<ExternalProduct>;
  /** @deprecated  */
  readonly generalSettings: Maybe<GeneralSettings>;
  /**
   * A simple product object
   * @deprecated
   */
  readonly groupProduct: Maybe<GroupProduct>;
  /**
   * An object of the mediaItem Type.
   * @deprecated
   */
  readonly mediaItem: Maybe<MediaItem>;
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  readonly mediaItemBy: Maybe<MediaItem>;
  /**
   * Connection between the RootQuery type and the mediaItem type
   * @deprecated
   */
  readonly mediaItems: Maybe<RootQueryToMediaItemConnection>;
  /**
   * A WordPress navigation menu
   * @deprecated
   */
  readonly menu: Maybe<Menu>;
  /**
   * A WordPress navigation menu item
   * @deprecated
   */
  readonly menuItem: Maybe<MenuItem>;
  /**
   * Connection between the RootQuery type and the MenuItem type
   * @deprecated
   */
  readonly menuItems: Maybe<RootQueryToMenuItemConnection>;
  /**
   * Connection between the RootQuery type and the Menu type
   * @deprecated
   */
  readonly menus: Maybe<RootQueryToMenuConnection>;
  /**
   * Fetches an object given its ID
   * @deprecated
   */
  readonly node: Maybe<Node>;
  /** @deprecated  */
  readonly nodeByUri: Maybe<UniformResourceIdentifiable>;
  /**
   * A order object
   * @deprecated
   */
  readonly order: Maybe<Order>;
  /**
   * Connection between the RootQuery type and the Order type
   * @deprecated
   */
  readonly orders: Maybe<RootQueryToOrderConnection>;
  /**
   * An object of the page Type.
   * @deprecated
   */
  readonly page: Maybe<Page>;
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  readonly pageBy: Maybe<Page>;
  /**
   * Connection between the RootQuery type and the page type
   * @deprecated
   */
  readonly pages: Maybe<RootQueryToPageConnection>;
  /**
   * Connection between the RootQuery type and the PaymentGateway type
   * @deprecated
   */
  readonly paymentGateways: Maybe<RootQueryToPaymentGatewayConnection>;
  /**
   * A WordPress plugin
   * @deprecated
   */
  readonly plugin: Maybe<Plugin>;
  /**
   * Connection between the RootQuery type and the Plugin type
   * @deprecated
   */
  readonly plugins: Maybe<RootQueryToPluginConnection>;
  /**
   * An object of the post Type.
   * @deprecated
   */
  readonly post: Maybe<Post>;
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  readonly postBy: Maybe<Post>;
  /**
   * A 0bject
   * @deprecated
   */
  readonly postFormat: Maybe<PostFormat>;
  /**
   * Connection between the RootQuery type and the postFormat type
   * @deprecated
   */
  readonly postFormats: Maybe<RootQueryToPostFormatConnection>;
  /**
   * Connection between the RootQuery type and the post type
   * @deprecated
   */
  readonly posts: Maybe<RootQueryToPostConnection>;
  /**
   * A product object
   * @deprecated
   */
  readonly product: Maybe<Product>;
  /**
   * Connection between the RootQuery type and the productCategory type
   * @deprecated
   */
  readonly productCategories: Maybe<RootQueryToProductCategoryConnection>;
  /**
   * A 0bject
   * @deprecated
   */
  readonly productCategory: Maybe<ProductCategory>;
  /**
   * A 0bject
   * @deprecated
   */
  readonly productTag: Maybe<ProductTag>;
  /**
   * Connection between the RootQuery type and the productTag type
   * @deprecated
   */
  readonly productTags: Maybe<RootQueryToProductTagConnection>;
  /**
   * A 0bject
   * @deprecated
   */
  readonly productType: Maybe<ProductType>;
  /**
   * Connection between the RootQuery type and the productType type
   * @deprecated
   */
  readonly productTypes: Maybe<RootQueryToProductTypeConnection>;
  /**
   * A product variation object
   * @deprecated
   */
  readonly productVariation: Maybe<ProductVariation>;
  /**
   * Connection between the RootQuery type and the Product type
   * @deprecated
   */
  readonly products: Maybe<RootQueryToProductConnection>;
  /** @deprecated  */
  readonly readingSettings: Maybe<ReadingSettings>;
  /**
   * A refund object
   * @deprecated
   */
  readonly refund: Maybe<Refund>;
  /**
   * Connection between the RootQuery type and the Refund type
   * @deprecated
   */
  readonly refunds: Maybe<RootQueryToRefundConnection>;
  /**
   * Connection between the RootQuery type and the EnqueuedScript type
   * @deprecated
   */
  readonly registeredScripts: Maybe<RootQueryToEnqueuedScriptConnection>;
  /**
   * Connection between the RootQuery type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly registeredStylesheets: Maybe<RootQueryToEnqueuedStylesheetConnection>;
  /**
   * Connection between the RootQuery type and the ContentRevisionUnion type
   * @deprecated
   */
  readonly revisions: Maybe<RootQueryToContentRevisionUnionConnection>;
  /**
   * A 0bject
   * @deprecated
   */
  readonly shippingClass: Maybe<ShippingClass>;
  /**
   * Connection between the RootQuery type and the shippingClass type
   * @deprecated
   */
  readonly shippingClasses: Maybe<RootQueryToShippingClassConnection>;
  /**
   * A shipping method object
   * @deprecated
   */
  readonly shippingMethod: Maybe<ShippingMethod>;
  /**
   * Connection between the RootQuery type and the ShippingMethod type
   * @deprecated
   */
  readonly shippingMethods: Maybe<RootQueryToShippingMethodConnection>;
  /**
   * A simple product object
   * @deprecated
   */
  readonly simpleProduct: Maybe<SimpleProduct>;
  /**
   * A 0bject
   * @deprecated
   */
  readonly tag: Maybe<Tag>;
  /**
   * Connection between the RootQuery type and the tag type
   * @deprecated
   */
  readonly tags: Maybe<RootQueryToTagConnection>;
  /**
   * A tax rate object
   * @deprecated
   */
  readonly taxRate: Maybe<TaxRate>;
  /**
   * Connection between the RootQuery type and the TaxRate type
   * @deprecated
   */
  readonly taxRates: Maybe<RootQueryToTaxRateConnection>;
  /**
   * Connection between the RootQuery type and the Taxonomy type
   * @deprecated
   */
  readonly taxonomies: Maybe<RootQueryToTaxonomyConnection>;
  /**
   * Fetch a Taxonomy node by unique Identifier
   * @deprecated
   */
  readonly taxonomy: Maybe<Taxonomy>;
  /**
   * A node in a taxonomy used to group and relate content nodes
   * @deprecated
   */
  readonly termNode: Maybe<TermNode>;
  /**
   * Connection between the RootQuery type and the TermNode type
   * @deprecated
   */
  readonly terms: Maybe<RootQueryToTermNodeConnection>;
  /**
   * A Theme object
   * @deprecated
   */
  readonly theme: Maybe<Theme>;
  /**
   * Connection between the RootQuery type and the Theme type
   * @deprecated
   */
  readonly themes: Maybe<RootQueryToThemeConnection>;
  /**
   * Returns a user
   * @deprecated
   */
  readonly user: Maybe<User>;
  /**
   * Returns a user role
   * @deprecated
   */
  readonly userRole: Maybe<UserRole>;
  /**
   * Connection between the RootQuery type and the UserRole type
   * @deprecated
   */
  readonly userRoles: Maybe<RootQueryToUserRoleConnection>;
  /**
   * Connection between the RootQuery type and the User type
   * @deprecated
   */
  readonly users: Maybe<RootQueryToUserConnection>;
  /**
   * A simple product object
   * @deprecated
   */
  readonly variableProduct: Maybe<VariableProduct>;
  /**
   * Returns the current user
   * @deprecated
   */
  readonly viewer: Maybe<User>;
  /**
   * A 0bject
   * @deprecated
   */
  readonly visibleProduct: Maybe<VisibleProduct>;
  /**
   * Connection between the RootQuery type and the visibleProduct type
   * @deprecated
   */
  readonly visibleProducts: Maybe<RootQueryToVisibleProductConnection>;
  /** @deprecated  */
  readonly writingSettings: Maybe<WritingSettings>;
}


/** The root entry point into the Graph */
export interface RootQueryCartFeeArgs {
  id: Scalars['ID'];
}


/** The root entry point into the Graph */
export interface RootQueryCartItemArgs {
  key: Scalars['ID'];
}


/** The root entry point into the Graph */
export interface RootQueryCategoriesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToCategoryConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryCategoryArgs {
  id: Scalars['ID'];
  idType: Maybe<CategoryIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryCommentArgs {
  id: Scalars['ID'];
}


/** The root entry point into the Graph */
export interface RootQueryCommentsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToCommentConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryContentNodeArgs {
  id: Scalars['ID'];
  idType: Maybe<ContentNodeIdTypeEnum>;
  contentType: Maybe<ContentTypeEnum>;
  asPreview: Maybe<Scalars['Boolean']>;
}


/** The root entry point into the Graph */
export interface RootQueryContentNodesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToContentNodeConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryContentTypeArgs {
  id: Scalars['ID'];
  idType: Maybe<ContentTypeIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryContentTypesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryCouponArgs {
  id: Scalars['ID'];
  idType: Maybe<CouponIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryCouponsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToCouponConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryCustomerArgs {
  id: Maybe<Scalars['ID']>;
  customerId: Maybe<Scalars['Int']>;
}


/** The root entry point into the Graph */
export interface RootQueryCustomersArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToCustomerConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryExternalProductArgs {
  id: Maybe<Scalars['ID']>;
  idType: Maybe<ProductIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryGroupProductArgs {
  id: Maybe<Scalars['ID']>;
  idType: Maybe<ProductIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryMediaItemArgs {
  id: Scalars['ID'];
  idType: Maybe<MediaItemIdType>;
  asPreview: Maybe<Scalars['Boolean']>;
}


/** The root entry point into the Graph */
export interface RootQueryMediaItemByArgs {
  id: Maybe<Scalars['ID']>;
  mediaItemId: Maybe<Scalars['Int']>;
  uri: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryMediaItemsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToMediaItemConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryMenuArgs {
  id: Scalars['ID'];
  idType: Maybe<MenuNodeIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryMenuItemArgs {
  id: Scalars['ID'];
  idType: Maybe<MenuItemNodeIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryMenuItemsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToMenuItemConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryMenusArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToMenuConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryNodeArgs {
  id: Maybe<Scalars['ID']>;
}


/** The root entry point into the Graph */
export interface RootQueryNodeByUriArgs {
  uri: Scalars['String'];
}


/** The root entry point into the Graph */
export interface RootQueryOrderArgs {
  id: Maybe<Scalars['ID']>;
  idType: Maybe<OrderIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryOrdersArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToOrderConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryPageArgs {
  id: Scalars['ID'];
  idType: Maybe<PageIdType>;
  asPreview: Maybe<Scalars['Boolean']>;
}


/** The root entry point into the Graph */
export interface RootQueryPageByArgs {
  id: Maybe<Scalars['ID']>;
  pageId: Maybe<Scalars['Int']>;
  uri: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryPagesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToPageConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryPaymentGatewaysArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToPaymentGatewayConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryPluginArgs {
  id: Scalars['ID'];
}


/** The root entry point into the Graph */
export interface RootQueryPluginsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryPostArgs {
  id: Scalars['ID'];
  idType: Maybe<PostIdType>;
  asPreview: Maybe<Scalars['Boolean']>;
}


/** The root entry point into the Graph */
export interface RootQueryPostByArgs {
  id: Maybe<Scalars['ID']>;
  postId: Maybe<Scalars['Int']>;
  uri: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryPostFormatArgs {
  id: Scalars['ID'];
  idType: Maybe<PostFormatIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryPostFormatsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToPostFormatConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryPostsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToPostConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryProductArgs {
  id: Scalars['ID'];
  idType: Maybe<ProductIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryProductCategoriesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToProductCategoryConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryProductCategoryArgs {
  id: Scalars['ID'];
  idType: Maybe<ProductCategoryIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryProductTagArgs {
  id: Scalars['ID'];
  idType: Maybe<ProductTagIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryProductTagsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToProductTagConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryProductTypeArgs {
  id: Scalars['ID'];
  idType: Maybe<ProductTypeIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryProductTypesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToProductTypeConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryProductVariationArgs {
  id: Maybe<Scalars['ID']>;
  idType: Maybe<ProductVariationIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryProductsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToProductConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryRefundArgs {
  id: Scalars['ID'];
  idType: Maybe<RefundIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryRefundsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToRefundConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryRegisteredScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryRegisteredStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryRevisionsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToContentRevisionUnionConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryShippingClassArgs {
  id: Scalars['ID'];
  idType: Maybe<ShippingClassIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryShippingClassesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToShippingClassConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryShippingMethodArgs {
  id: Maybe<Scalars['ID']>;
  idType: Maybe<ShippingMethodIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryShippingMethodsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQuerySimpleProductArgs {
  id: Maybe<Scalars['ID']>;
  idType: Maybe<ProductIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryTagArgs {
  id: Scalars['ID'];
  idType: Maybe<TagIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryTagsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToTagConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryTaxRateArgs {
  id: Maybe<Scalars['ID']>;
  idType: Maybe<TaxRateIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryTaxRatesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToTaxRateConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryTaxonomiesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryTaxonomyArgs {
  id: Scalars['ID'];
  idType: Maybe<TaxonomyIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryTermNodeArgs {
  id: Scalars['ID'];
  idType: Maybe<TermNodeIdTypeEnum>;
  taxonomy: Maybe<TaxonomyEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryTermsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToTermNodeConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryThemeArgs {
  id: Scalars['ID'];
}


/** The root entry point into the Graph */
export interface RootQueryThemesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryUserArgs {
  id: Scalars['ID'];
  idType: Maybe<UserNodeIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryUserRoleArgs {
  id: Scalars['ID'];
}


/** The root entry point into the Graph */
export interface RootQueryUserRolesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryUsersArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToUserConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryVariableProductArgs {
  id: Maybe<Scalars['ID']>;
  idType: Maybe<ProductIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryVisibleProductArgs {
  id: Scalars['ID'];
  idType: Maybe<VisibleProductIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryVisibleProductsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToVisibleProductConnectionWhereArgs>;
}

/** All of the registered settings */
export interface Settings {
  readonly __typename: 'Settings';
  /**
   * Allow people to submit comments on new posts.
   * @deprecated
   */
  readonly discussionSettingsDefaultCommentStatus: Maybe<Scalars['String']>;
  /**
   * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
   * @deprecated
   */
  readonly discussionSettingsDefaultPingStatus: Maybe<Scalars['String']>;
  /**
   * A date format for all date strings.
   * @deprecated
   */
  readonly generalSettingsDateFormat: Maybe<Scalars['String']>;
  /**
   * Site tagline.
   * @deprecated
   */
  readonly generalSettingsDescription: Maybe<Scalars['String']>;
  /**
   * This address is used for admin purposes, like new user notification.
   * @deprecated
   */
  readonly generalSettingsEmail: Maybe<Scalars['String']>;
  /**
   * WordPress locale code.
   * @deprecated
   */
  readonly generalSettingsLanguage: Maybe<Scalars['String']>;
  /**
   * A day number of the week that the week should start on.
   * @deprecated
   */
  readonly generalSettingsStartOfWeek: Maybe<Scalars['Int']>;
  /**
   * A time format for all time strings.
   * @deprecated
   */
  readonly generalSettingsTimeFormat: Maybe<Scalars['String']>;
  /**
   * A city in the same timezone as you.
   * @deprecated
   */
  readonly generalSettingsTimezone: Maybe<Scalars['String']>;
  /**
   * Site title.
   * @deprecated
   */
  readonly generalSettingsTitle: Maybe<Scalars['String']>;
  /**
   * Site URL.
   * @deprecated
   */
  readonly generalSettingsUrl: Maybe<Scalars['String']>;
  /**
   * Blog pages show at most.
   * @deprecated
   */
  readonly readingSettingsPostsPerPage: Maybe<Scalars['Int']>;
  /**
   * Default post category.
   * @deprecated
   */
  readonly writingSettingsDefaultCategory: Maybe<Scalars['Int']>;
  /**
   * Default post format.
   * @deprecated
   */
  readonly writingSettingsDefaultPostFormat: Maybe<Scalars['String']>;
  /**
   * Convert emoticons like :-) and :-P to graphics on display.
   * @deprecated
   */
  readonly writingSettingsUseSmilies: Maybe<Scalars['Boolean']>;
}

/** The cart object */
export interface Cart {
  readonly __typename: 'Cart';
  /**
   * Connection between the Cart type and the Coupon type
   * @deprecated
   */
  readonly appliedCoupons: Maybe<CartToCouponConnection>;
  /**
   * Available shipping methods for this order.
   * @deprecated
   */
  readonly availableShippingMethods: Maybe<ReadonlyArray<Maybe<ShippingPackage>>>;
  /**
   * Shipping method chosen for this order.
   * @deprecated
   */
  readonly chosenShippingMethod: Maybe<Scalars['String']>;
  /**
   * Connection between the Cart type and the CartItem type
   * @deprecated
   */
  readonly contents: Maybe<CartToCartItemConnection>;
  /**
   * Cart contents tax
   * @deprecated
   */
  readonly contentsTax: Maybe<Scalars['String']>;
  /**
   * Cart contents total
   * @deprecated
   */
  readonly contentsTotal: Maybe<Scalars['String']>;
  /**
   * Cart discount tax
   * @deprecated
   */
  readonly discountTax: Maybe<Scalars['String']>;
  /**
   * Cart discount total
   * @deprecated
   */
  readonly discountTotal: Maybe<Scalars['String']>;
  /**
   * Do display prices include taxes
   * @deprecated
   */
  readonly displayPricesIncludeTax: Maybe<Scalars['Boolean']>;
  /**
   * Cart fee tax
   * @deprecated
   */
  readonly feeTax: Maybe<Scalars['String']>;
  /**
   * Cart fee total
   * @deprecated
   */
  readonly feeTotal: Maybe<Scalars['String']>;
  /**
   * Additional fees on the cart.
   * @deprecated
   */
  readonly fees: Maybe<ReadonlyArray<Maybe<CartFee>>>;
  /**
   * Is cart empty
   * @deprecated
   */
  readonly isEmpty: Maybe<Scalars['Boolean']>;
  /**
   * Is customer shipping address needed
   * @deprecated
   */
  readonly needsShippingAddress: Maybe<Scalars['Boolean']>;
  /**
   * Cart shipping tax
   * @deprecated
   */
  readonly shippingTax: Maybe<Scalars['String']>;
  /**
   * Cart shipping total
   * @deprecated
   */
  readonly shippingTotal: Maybe<Scalars['String']>;
  /**
   * Cart subtotal
   * @deprecated
   */
  readonly subtotal: Maybe<Scalars['String']>;
  /**
   * Cart subtotal tax
   * @deprecated
   */
  readonly subtotalTax: Maybe<Scalars['String']>;
  /**
   * Cart total after calculation
   * @deprecated
   */
  readonly total: Maybe<Scalars['String']>;
  /**
   * Cart total tax amount
   * @deprecated
   */
  readonly totalTax: Maybe<Scalars['String']>;
}


/** The cart object */
export interface CartAppliedCouponsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CartToCouponConnectionWhereArgs>;
}


/** The cart object */
export interface CartContentsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CartToCartItemConnectionWhereArgs>;
}

/** Arguments for filtering the CartToCouponConnection connection */
export interface CartToCouponConnectionWhereArgs {
  /** Limit result set to resources with a specific code. */
  readonly code: Maybe<Scalars['String']>;
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostTypeOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  readonly search: Maybe<Scalars['String']>;
}

/** Filter the connection based on input */
export interface DateQueryInput {
  /** Nodes should be returned after this date */
  readonly after: Maybe<DateInput>;
  /** Nodes should be returned before this date */
  readonly before: Maybe<DateInput>;
  /** Column to query against */
  readonly column: Maybe<PostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  readonly compare: Maybe<Scalars['String']>;
  /** Day of the month (from 1 to 31) */
  readonly day: Maybe<Scalars['Int']>;
  /** Hour (from 0 to 23) */
  readonly hour: Maybe<Scalars['Int']>;
  /** For after/before, whether exact value should be matched or not */
  readonly inclusive: Maybe<Scalars['Boolean']>;
  /** Minute (from 0 to 59) */
  readonly minute: Maybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  readonly month: Maybe<Scalars['Int']>;
  /** OR or AND, how the sub-arrays should be compared */
  readonly relation: Maybe<RelationEnum>;
  /** Second (0 to 59) */
  readonly second: Maybe<Scalars['Int']>;
  /** Week of the year (from 0 to 53) */
  readonly week: Maybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  readonly year: Maybe<Scalars['Int']>;
}

/** Date values */
export interface DateInput {
  /** Day of the month (from 1 to 31) */
  readonly day: Maybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  readonly month: Maybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  readonly year: Maybe<Scalars['Int']>;
}

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
  Date = 'DATE',
  Modified = 'MODIFIED'
}

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  And = 'AND',
  Or = 'OR'
}

/** Options for ordering the connection */
export interface PostTypeOrderbyInput {
  readonly field: PostTypeOrderByEnum;
  readonly order: Maybe<OrderEnum>;
}

/** Fields to order the PostType connection by */
export enum PostTypeOrderByEnum {
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG'
}

/** The cardinality of the connection order */
export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Connection between the Cart type and the Coupon type */
export interface CartToCouponConnection {
  readonly __typename: 'CartToCouponConnection';
  /**
   * Edges for the CartToCouponConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<CartToCouponConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Coupon>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CartToCouponConnectionEdge {
  readonly __typename: 'CartToCouponConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Coupon>;
}

/** A coupon object */
export interface Coupon extends Node {
  readonly __typename: 'Coupon';
  /**
   * Amount off provided by the coupon
   * @deprecated
   */
  readonly amount: Maybe<Scalars['Float']>;
  /**
   * Coupon code
   * @deprecated
   */
  readonly code: Maybe<Scalars['String']>;
  /**
   * Connection between the Coupon type and the ContentType type
   * @deprecated
   */
  readonly contentType: Maybe<CouponToContentTypeConnectionEdge>;
  /**
   * The ID of the coupon in the database
   * @deprecated
   */
  readonly databaseId: Maybe<Scalars['Int']>;
  /**
   * Date coupon created
   * @deprecated
   */
  readonly date: Maybe<Scalars['String']>;
  /**
   * Date coupon expires
   * @deprecated
   */
  readonly dateExpiry: Maybe<Scalars['String']>;
  /**
   * Explanation of what the coupon does
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * Type of discount
   * @deprecated
   */
  readonly discountType: Maybe<DiscountTypeEnum>;
  /**
   * Only customers with a matching email address can use the coupon
   * @deprecated
   */
  readonly emailRestrictions: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * Excluding sale items mean this coupon cannot be used on items that are on sale (or carts that contain on sale items)
   * @deprecated
   */
  readonly excludeSaleItems: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the Coupon type and the productCategory type
   * @deprecated
   */
  readonly excludedProductCategories: Maybe<CouponToProductCategoryConnection>;
  /**
   * Connection between the Coupon type and the Product type
   * @deprecated
   */
  readonly excludedProducts: Maybe<CouponToProductConnection>;
  /**
   * Does this coupon grant free shipping?
   * @deprecated
   */
  readonly freeShipping: Maybe<Scalars['Boolean']>;
  /**
   * The globally unique identifier for the coupon
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Individual use means this coupon cannot be used in conjunction with other coupons
   * @deprecated
   */
  readonly individualUse: Maybe<Scalars['Boolean']>;
  /**
   * The number of products in your cart this coupon can apply to (for product discounts)
   * @deprecated
   */
  readonly limitUsageToXItems: Maybe<Scalars['Int']>;
  /**
   * Maximum spend amount that must be met before this coupon can be used
   * @deprecated
   */
  readonly maximumAmount: Maybe<Scalars['Float']>;
  /**
   * Object meta data
   * @deprecated
   */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * Minimum spend amount that must be met before this coupon can be used
   * @deprecated
   */
  readonly minimumAmount: Maybe<Scalars['Float']>;
  /**
   * Date coupon modified
   * @deprecated
   */
  readonly modified: Maybe<Scalars['String']>;
  /**
   * Connection between the Coupon type and the productCategory type
   * @deprecated
   */
  readonly productCategories: Maybe<CouponToProductCategoryConnection>;
  /**
   * Connection between the Coupon type and the Product type
   * @deprecated
   */
  readonly products: Maybe<CouponToProductConnection>;
  /**
   * How many times the coupon has been used
   * @deprecated
   */
  readonly usageCount: Maybe<Scalars['Int']>;
  /**
   * Amount of times this coupon can be used globally
   * @deprecated
   */
  readonly usageLimit: Maybe<Scalars['Int']>;
  /**
   * Amount of times this coupon can be used by a customer
   * @deprecated
   */
  readonly usageLimitPerUser: Maybe<Scalars['Int']>;
  /**
   * Connection between the Coupon type and the Customer type
   * @deprecated
   */
  readonly usedBy: Maybe<CouponToCustomerConnection>;
}


/** A coupon object */
export interface CouponExcludedProductCategoriesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CouponToProductCategoryConnectionWhereArgs>;
}


/** A coupon object */
export interface CouponExcludedProductsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CouponToProductConnectionWhereArgs>;
}


/** A coupon object */
export interface CouponMetaDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  multiple: Maybe<Scalars['Boolean']>;
}


/** A coupon object */
export interface CouponProductCategoriesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CouponToProductCategoryConnectionWhereArgs>;
}


/** A coupon object */
export interface CouponProductsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CouponToProductConnectionWhereArgs>;
}


/** A coupon object */
export interface CouponUsedByArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CouponToCustomerConnectionWhereArgs>;
}

/** An object with an ID */
export interface Node {
  /** The globally unique ID for the object */
  readonly id: Scalars['ID'];
}

/** Connection between the Coupon type and the ContentType type */
export interface CouponToContentTypeConnectionEdge {
  readonly __typename: 'CouponToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<ContentType>;
}

/** An Post Type object */
export interface ContentType extends Node, UniformResourceIdentifiable {
  readonly __typename: 'ContentType';
  /**
   * Whether this content type should can be exported.
   * @deprecated
   */
  readonly canExport: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the ContentType type and the Taxonomy type
   * @deprecated
   */
  readonly connectedTaxonomies: Maybe<ContentTypeToTaxonomyConnection>;
  /**
   * Connection between the ContentType type and the ContentNode type
   * @deprecated
   */
  readonly contentNodes: Maybe<ContentTypeToContentNodeConnection>;
  /**
   * Whether content of this type should be deleted when the author of it is deleted from the system.
   * @deprecated
   */
  readonly deleteWithUser: Maybe<Scalars['Boolean']>;
  /**
   * Description of the content type.
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * Whether to exclude nodes of this content type from front end search results.
   * @deprecated
   */
  readonly excludeFromSearch: Maybe<Scalars['Boolean']>;
  /**
   * The plural name of the content type within the GraphQL Schema.
   * @deprecated
   */
  readonly graphqlPluralName: Maybe<Scalars['String']>;
  /**
   * The singular name of the content type within the GraphQL Schema.
   * @deprecated
   */
  readonly graphqlSingleName: Maybe<Scalars['String']>;
  /**
   * Whether this content type should have archives. Content archives are generated by type and by date.
   * @deprecated
   */
  readonly hasArchive: Maybe<Scalars['Boolean']>;
  /**
   * Whether the content type is hierarchical, for example pages.
   * @deprecated
   */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /**
   * The globally unique identifier of the post-type object.
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether this page is set to the static front page.
   * @deprecated
   */
  readonly isFrontPage: Scalars['Boolean'];
  /**
   * Whether this page is set to the blog posts page.
   * @deprecated
   */
  readonly isPostsPage: Scalars['Boolean'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * Display name of the content type.
   * @deprecated
   */
  readonly label: Maybe<Scalars['String']>;
  /**
   * Details about the content type labels.
   * @deprecated
   */
  readonly labels: Maybe<PostTypeLabelDetails>;
  /**
   * The name of the icon file to display as a menu icon.
   * @deprecated
   */
  readonly menuIcon: Maybe<Scalars['String']>;
  /**
   * The position of this post type in the menu. Only applies if show_in_menu is true.
   * @deprecated
   */
  readonly menuPosition: Maybe<Scalars['Int']>;
  /**
   * The internal name of the post type. This should not be used for display purposes.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention.
   * @deprecated
   */
  readonly public: Maybe<Scalars['Boolean']>;
  /**
   * Whether queries can be performed on the front end for the content type as part of parse_request().
   * @deprecated
   */
  readonly publiclyQueryable: Maybe<Scalars['Boolean']>;
  /**
   * Name of content type to display in REST API &quot;wp/v2&quot; namespace.
   * @deprecated
   */
  readonly restBase: Maybe<Scalars['String']>;
  /**
   * The REST Controller class assigned to handling this content type.
   * @deprecated
   */
  readonly restControllerClass: Maybe<Scalars['String']>;
  /**
   * Makes this content type available via the admin bar.
   * @deprecated
   */
  readonly showInAdminBar: Maybe<Scalars['Boolean']>;
  /**
   * Whether to add the content type to the GraphQL Schema.
   * @deprecated
   */
  readonly showInGraphql: Maybe<Scalars['Boolean']>;
  /**
   * Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that.
   * @deprecated
   */
  readonly showInMenu: Maybe<Scalars['Boolean']>;
  /**
   * Makes this content type available for selection in navigation menus.
   * @deprecated
   */
  readonly showInNavMenus: Maybe<Scalars['Boolean']>;
  /**
   * Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace.
   * @deprecated
   */
  readonly showInRest: Maybe<Scalars['Boolean']>;
  /**
   * Whether to generate and allow a UI for managing this content type in the admin.
   * @deprecated
   */
  readonly showUi: Maybe<Scalars['Boolean']>;
  /**
   * The unique resource identifier path
   * @deprecated
   */
  readonly uri: Maybe<Scalars['String']>;
}


/** An Post Type object */
export interface ContentTypeConnectedTaxonomiesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** An Post Type object */
export interface ContentTypeContentNodesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ContentTypeToContentNodeConnectionWhereArgs>;
}

/** Any node that has a URI */
export interface UniformResourceIdentifiable {
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
}

/** Connection between the ContentType type and the Taxonomy type */
export interface ContentTypeToTaxonomyConnection {
  readonly __typename: 'ContentTypeToTaxonomyConnection';
  /**
   * Edges for the ContentTypeToTaxonomyConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ContentTypeToTaxonomyConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Taxonomy>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ContentTypeToTaxonomyConnectionEdge {
  readonly __typename: 'ContentTypeToTaxonomyConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Taxonomy>;
}

/** A taxonomy object */
export interface Taxonomy extends Node {
  readonly __typename: 'Taxonomy';
  /**
   * List of Content Types associated with the Taxonomy
   * @deprecated
   */
  readonly connectedContentTypes: Maybe<TaxonomyToContentTypeConnection>;
  /**
   * Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * The plural name of the post type within the GraphQL Schema.
   * @deprecated
   */
  readonly graphqlPluralName: Maybe<Scalars['String']>;
  /**
   * The singular name of the post type within the GraphQL Schema.
   * @deprecated
   */
  readonly graphqlSingleName: Maybe<Scalars['String']>;
  /**
   * Whether the taxonomy is hierarchical
   * @deprecated
   */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /**
   * The globally unique identifier of the taxonomy object.
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * Name of the taxonomy shown in the menu. Usually plural.
   * @deprecated
   */
  readonly label: Maybe<Scalars['String']>;
  /**
   * The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Whether the taxonomy is publicly queryable
   * @deprecated
   */
  readonly public: Maybe<Scalars['Boolean']>;
  /**
   * Name of content type to diplay in REST API &quot;wp/v2&quot; namespace.
   * @deprecated
   */
  readonly restBase: Maybe<Scalars['String']>;
  /**
   * The REST Controller class assigned to handling this content type.
   * @deprecated
   */
  readonly restControllerClass: Maybe<Scalars['String']>;
  /**
   * Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud
   * @deprecated
   */
  readonly showCloud: Maybe<Scalars['Boolean']>;
  /**
   * Whether to display a column for the taxonomy on its post type listing screens.
   * @deprecated
   */
  readonly showInAdminColumn: Maybe<Scalars['Boolean']>;
  /**
   * Whether to add the post type to the GraphQL Schema.
   * @deprecated
   */
  readonly showInGraphql: Maybe<Scalars['Boolean']>;
  /**
   * Whether to show the taxonomy in the admin menu
   * @deprecated
   */
  readonly showInMenu: Maybe<Scalars['Boolean']>;
  /**
   * Whether the taxonomy is available for selection in navigation menus.
   * @deprecated
   */
  readonly showInNavMenus: Maybe<Scalars['Boolean']>;
  /**
   * Whether to show the taxonomy in the quick/bulk edit panel.
   * @deprecated
   */
  readonly showInQuickEdit: Maybe<Scalars['Boolean']>;
  /**
   * Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace.
   * @deprecated
   */
  readonly showInRest: Maybe<Scalars['Boolean']>;
  /**
   * Whether to generate and allow a UI for managing terms in this taxonomy in the admin
   * @deprecated
   */
  readonly showUi: Maybe<Scalars['Boolean']>;
}


/** A taxonomy object */
export interface TaxonomyConnectedContentTypesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}

/** Connection between the Taxonomy type and the ContentType type */
export interface TaxonomyToContentTypeConnection {
  readonly __typename: 'TaxonomyToContentTypeConnection';
  /**
   * Edges for the TaxonomyToContentTypeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<TaxonomyToContentTypeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentType>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface TaxonomyToContentTypeConnectionEdge {
  readonly __typename: 'TaxonomyToContentTypeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentType>;
}

/** Information about pagination in a connection. */
export interface WpPageInfo {
  readonly __typename: 'WPPageInfo';
  /**
   * When paginating forwards, the cursor to continue.
   * @deprecated
   */
  readonly endCursor: Maybe<Scalars['String']>;
  /**
   * When paginating forwards, are there more items?
   * @deprecated
   */
  readonly hasNextPage: Scalars['Boolean'];
  /**
   * When paginating backwards, are there more items?
   * @deprecated
   */
  readonly hasPreviousPage: Scalars['Boolean'];
  /**
   * When paginating backwards, the cursor to continue.
   * @deprecated
   */
  readonly startCursor: Maybe<Scalars['String']>;
  /** @deprecated  */
  readonly total: Maybe<Scalars['Int']>;
}

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export interface ContentTypeToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** The MimeType of the object */
export enum MimeTypeEnum {
  ApplicationJava = 'APPLICATION_JAVA',
  ApplicationMsword = 'APPLICATION_MSWORD',
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  ApplicationOxps = 'APPLICATION_OXPS',
  ApplicationPdf = 'APPLICATION_PDF',
  ApplicationRar = 'APPLICATION_RAR',
  ApplicationRtf = 'APPLICATION_RTF',
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  ApplicationXTar = 'APPLICATION_X_TAR',
  ApplicationZip = 'APPLICATION_ZIP',
  AudioAac = 'AUDIO_AAC',
  AudioFlac = 'AUDIO_FLAC',
  AudioMidi = 'AUDIO_MIDI',
  AudioMpeg = 'AUDIO_MPEG',
  AudioOgg = 'AUDIO_OGG',
  AudioWav = 'AUDIO_WAV',
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  ImageBmp = 'IMAGE_BMP',
  ImageGif = 'IMAGE_GIF',
  ImageJpeg = 'IMAGE_JPEG',
  ImagePng = 'IMAGE_PNG',
  ImageTiff = 'IMAGE_TIFF',
  ImageXIcon = 'IMAGE_X_ICON',
  TextCalendar = 'TEXT_CALENDAR',
  TextCss = 'TEXT_CSS',
  TextCsv = 'TEXT_CSV',
  TextPlain = 'TEXT_PLAIN',
  TextRichtext = 'TEXT_RICHTEXT',
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  TextVtt = 'TEXT_VTT',
  Video_3Gpp = 'VIDEO_3GPP',
  Video_3Gpp2 = 'VIDEO_3GPP2',
  VideoAvi = 'VIDEO_AVI',
  VideoDivx = 'VIDEO_DIVX',
  VideoMp4 = 'VIDEO_MP4',
  VideoMpeg = 'VIDEO_MPEG',
  VideoOgg = 'VIDEO_OGG',
  VideoQuicktime = 'VIDEO_QUICKTIME',
  VideoWebm = 'VIDEO_WEBM',
  VideoXFlv = 'VIDEO_X_FLV',
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  VideoXMsWm = 'VIDEO_X_MS_WM',
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

/** Options for ordering the connection */
export interface PostObjectsConnectionOrderbyInput {
  /** The field to order the connection by */
  readonly field: PostObjectsConnectionOrderbyEnum;
  /** Possible directions in which to order a list of items */
  readonly order: OrderEnum;
}

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by the number of comments it has acquired */
  CommentCount = 'COMMENT_COUNT',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE'
}

/** The status of the object. */
export enum PostStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the pending status */
  Pending = 'PENDING',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH',
  /** Objects with the wc-cancelled status */
  WcCancelled = 'WC_CANCELLED',
  /** Objects with the wc-completed status */
  WcCompleted = 'WC_COMPLETED',
  /** Objects with the wc-failed status */
  WcFailed = 'WC_FAILED',
  /** Objects with the wc-on-hold status */
  WcOnHold = 'WC_ON_HOLD',
  /** Objects with the wc-pending status */
  WcPending = 'WC_PENDING',
  /** Objects with the wc-processing status */
  WcProcessing = 'WC_PROCESSING',
  /** Objects with the wc-refunded status */
  WcRefunded = 'WC_REFUNDED'
}

/** Connection between the ContentType type and the ContentNode type */
export interface ContentTypeToContentNodeConnection {
  readonly __typename: 'ContentTypeToContentNodeConnection';
  /**
   * Edges for the ContentTypeToContentNodeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ContentTypeToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ContentTypeToContentNodeConnectionEdge {
  readonly __typename: 'ContentTypeToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** Nodes used to manage content */
export interface ContentNode {
  /** The ID of the node in the database. */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn't exist or is greater than 15 seconds */
  readonly editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post->guid and the guid column in the "post_objects" database table. */
  readonly guid: Maybe<Scalars['String']>;
  /** The globally unique identifier of the node. */
  readonly id: Scalars['ID'];
  /** Whether the object is a node in the preview state */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /** The database id of the preview node */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post->post_name field and the post_name column in the database for the "post_objects" table. */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** URI path for the resource */
  readonly uri: Scalars['String'];
}


/** Nodes used to manage content */
export interface ContentNodeEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** Nodes used to manage content */
export interface ContentNodeEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}

/** Connection between the ContentNode type and the User type */
export interface ContentNodeToEditLockConnectionEdge {
  readonly __typename: 'ContentNodeToEditLockConnectionEdge';
  /**
   * The timestamp for when the node was last edited
   * @deprecated
   */
  readonly lockTimestamp: Maybe<Scalars['String']>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<User>;
}

/** A User object */
export interface User extends Node, UniformResourceIdentifiable, Commenter, DatabaseIdentifier {
  readonly __typename: 'User';
  /**
   * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
   * @deprecated
   */
  readonly avatar: Maybe<Avatar>;
  /**
   * User metadata option name. Usually it will be &quot;wp_capabilities&quot;.
   * @deprecated
   */
  readonly capKey: Maybe<Scalars['String']>;
  /**
   * A list of capabilities (permissions) granted to the user
   * @deprecated
   */
  readonly capabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * Connection between the User type and the Comment type
   * @deprecated
   */
  readonly comments: Maybe<UserToCommentConnection>;
  /**
   * Identifies the primary key from the database.
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * Description of the user.
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * Email address of the user. This is equivalent to the WP_User-&gt;user_email property.
   * @deprecated
   */
  readonly email: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<UserToEnqueuedScriptConnection>;
  /**
   * Connection between the User type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<UserToEnqueuedStylesheetConnection>;
  /**
   * A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps.
   * @deprecated
   */
  readonly extraCapabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
   * @deprecated
   */
  readonly firstName: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the user object.
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
   * @deprecated
   */
  readonly lastName: Maybe<Scalars['String']>;
  /**
   * The preferred language locale set for the user. Value derived from get_user_locale().
   * @deprecated
   */
  readonly locale: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the mediaItem type
   * @deprecated
   */
  readonly mediaItems: Maybe<UserToMediaItemConnection>;
  /**
   * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename
   * @deprecated
   */
  readonly nicename: Maybe<Scalars['String']>;
  /**
   * Nickname of the user.
   * @deprecated
   */
  readonly nickname: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the page type
   * @deprecated
   */
  readonly pages: Maybe<UserToPageConnection>;
  /**
   * Connection between the User type and the post type
   * @deprecated
   */
  readonly posts: Maybe<UserToPostConnection>;
  /**
   * The date the user registered or was created. The field follows a full ISO8601 date string format.
   * @deprecated
   */
  readonly registeredDate: Maybe<Scalars['String']>;
  /**
   * Connection between the User and Revisions authored by the user
   * @deprecated
   */
  readonly revisions: Maybe<UserToContentRevisionUnionConnection>;
  /**
   * Connection between the User type and the UserRole type
   * @deprecated
   */
  readonly roles: Maybe<UserToUserRoleConnection>;
  /**
   * A JWT token that can be used in future requests to for WooCommerce session identification
   * @deprecated
   */
  readonly sessionToken: Maybe<Scalars['String']>;
  /**
   * The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * The unique resource identifier path
   * @deprecated
   */
  readonly uri: Maybe<Scalars['String']>;
  /**
   * A website url that is associated with the user.
   * @deprecated
   */
  readonly url: Maybe<Scalars['String']>;
  /**
   * The Id of the user. Equivalent to WP_User-&gt;ID
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly userId: Maybe<Scalars['Int']>;
  /**
   * Username for the user. This field is equivalent to WP_User-&gt;user_login.
   * @deprecated
   */
  readonly username: Maybe<Scalars['String']>;
}


/** A User object */
export interface UserAvatarArgs {
  size?: Maybe<Scalars['Int']>;
  forceDefault: Maybe<Scalars['Boolean']>;
  rating: Maybe<AvatarRatingEnum>;
}


/** A User object */
export interface UserCommentsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<UserToCommentConnectionWhereArgs>;
}


/** A User object */
export interface UserEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A User object */
export interface UserEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A User object */
export interface UserMediaItemsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<UserToMediaItemConnectionWhereArgs>;
}


/** A User object */
export interface UserPagesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<UserToPageConnectionWhereArgs>;
}


/** A User object */
export interface UserPostsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<UserToPostConnectionWhereArgs>;
}


/** A User object */
export interface UserRevisionsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<UserToContentRevisionUnionConnectionWhereArgs>;
}


/** A User object */
export interface UserRolesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}

/** The author of a comment */
export interface Commenter {
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  readonly email: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  readonly id: Scalars['ID'];
  /** Whether the author information is considered restricted. (not fully public) */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** The name of the author of a comment. */
  readonly name: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  readonly url: Maybe<Scalars['String']>;
}

/** Object that can be identified with a Database ID */
export interface DatabaseIdentifier {
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
}

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
  G = 'G',
  Pg = 'PG',
  R = 'R',
  X = 'X'
}

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export interface Avatar {
  readonly __typename: 'Avatar';
  /**
   * URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
   * @deprecated
   */
  readonly default: Maybe<Scalars['String']>;
  /**
   * HTML attributes to insert in the IMG element. Is not sanitized.
   * @deprecated
   */
  readonly extraAttr: Maybe<Scalars['String']>;
  /**
   * Whether to always show the default image, never the Gravatar.
   * @deprecated
   */
  readonly forceDefault: Maybe<Scalars['Boolean']>;
  /**
   * Whether the avatar was successfully found.
   * @deprecated
   */
  readonly foundAvatar: Maybe<Scalars['Boolean']>;
  /**
   * Height of the avatar image.
   * @deprecated
   */
  readonly height: Maybe<Scalars['Int']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order.
   * @deprecated
   */
  readonly rating: Maybe<Scalars['String']>;
  /**
   * Type of url scheme to use. Typically HTTP vs. HTTPS.
   * @deprecated
   */
  readonly scheme: Maybe<Scalars['String']>;
  /**
   * The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image.
   * @deprecated
   */
  readonly size: Maybe<Scalars['Int']>;
  /**
   * URL for the gravatar image source.
   * @deprecated
   */
  readonly url: Maybe<Scalars['String']>;
  /**
   * Width of the avatar image.
   * @deprecated
   */
  readonly width: Maybe<Scalars['Int']>;
}

/** Arguments for filtering the UserToCommentConnection connection */
export interface UserToCommentConnectionWhereArgs {
  /** Comment author email address. */
  readonly authorEmail: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: Maybe<ReadonlyArray<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: Maybe<Scalars['ID']>;
}

/** Allowed Content Types */
export enum ContentTypeEnum {
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  Page = 'PAGE',
  /** The Type of Content object */
  Post = 'POST'
}

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  CommentAgent = 'COMMENT_AGENT',
  CommentApproved = 'COMMENT_APPROVED',
  CommentAuthor = 'COMMENT_AUTHOR',
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  CommentContent = 'COMMENT_CONTENT',
  CommentDate = 'COMMENT_DATE',
  CommentDateGmt = 'COMMENT_DATE_GMT',
  CommentId = 'COMMENT_ID',
  CommentIn = 'COMMENT_IN',
  CommentKarma = 'COMMENT_KARMA',
  CommentParent = 'COMMENT_PARENT',
  CommentPostId = 'COMMENT_POST_ID',
  CommentType = 'COMMENT_TYPE',
  UserId = 'USER_ID'
}

/** Connection between the User type and the Comment type */
export interface UserToCommentConnection {
  readonly __typename: 'UserToCommentConnection';
  /**
   * Edges for the UserToCommentConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<UserToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToCommentConnectionEdge {
  readonly __typename: 'UserToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Comment>;
}

/** A Comment object */
export interface Comment extends Node, DatabaseIdentifier {
  readonly __typename: 'Comment';
  /**
   * User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL.
   * @deprecated
   */
  readonly agent: Maybe<Scalars['String']>;
  /**
   * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
   * @deprecated
   */
  readonly approved: Maybe<Scalars['Boolean']>;
  /**
   * The author of the comment
   * @deprecated
   */
  readonly author: Maybe<CommentToCommenterConnectionEdge>;
  /**
   * IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL.
   * @deprecated
   */
  readonly authorIp: Maybe<Scalars['String']>;
  /**
   * ID for the comment, unique among comments.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly commentId: Maybe<Scalars['Int']>;
  /**
   * Connection between the Comment type and the ContentNode type
   * @deprecated
   */
  readonly commentedOn: Maybe<CommentToContentNodeConnectionEdge>;
  /**
   * Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL.
   * @deprecated
   */
  readonly content: Maybe<Scalars['String']>;
  /**
   * The unique identifier stored in the database
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
   * @deprecated
   */
  readonly date: Maybe<Scalars['String']>;
  /**
   * Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL.
   * @deprecated
   */
  readonly dateGmt: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the comment object
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL.
   * @deprecated
   */
  readonly karma: Maybe<Scalars['Int']>;
  /**
   * Connection between the Comment type and the Comment type
   * @deprecated
   */
  readonly parent: Maybe<CommentToParentCommentConnectionEdge>;
  /**
   * Connection between the Comment type and the Comment type
   * @deprecated
   */
  readonly replies: Maybe<CommentToCommentConnection>;
  /**
   * Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL.
   * @deprecated
   */
  readonly type: Maybe<Scalars['String']>;
}


/** A Comment object */
export interface CommentContentArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** A Comment object */
export interface CommentParentArgs {
  where: Maybe<CommentToParentCommentConnectionWhereArgs>;
}


/** A Comment object */
export interface CommentRepliesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CommentToCommentConnectionWhereArgs>;
}

/** Connection between the Comment type and the Commenter type */
export interface CommentToCommenterConnectionEdge {
  readonly __typename: 'CommentToCommenterConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<Commenter>;
}

/** Connection between the Comment type and the ContentNode type */
export interface CommentToContentNodeConnectionEdge {
  readonly __typename: 'CommentToContentNodeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
  /** Provide the field value directly from database */
  Raw = 'RAW',
  /** Apply the default WordPress rendering */
  Rendered = 'RENDERED'
}

/** Arguments for filtering the CommentToParentCommentConnection connection */
export interface CommentToParentCommentConnectionWhereArgs {
  /** Comment author email address. */
  readonly authorEmail: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: Maybe<ReadonlyArray<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: Maybe<Scalars['ID']>;
}

/** Connection between the Comment type and the Comment type */
export interface CommentToParentCommentConnectionEdge {
  readonly __typename: 'CommentToParentCommentConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<Comment>;
}

/** Arguments for filtering the CommentToCommentConnection connection */
export interface CommentToCommentConnectionWhereArgs {
  /** Comment author email address. */
  readonly authorEmail: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: Maybe<ReadonlyArray<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: Maybe<Scalars['ID']>;
}

/** Connection between the Comment type and the Comment type */
export interface CommentToCommentConnection {
  readonly __typename: 'CommentToCommentConnection';
  /**
   * Edges for the CommentToCommentConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<CommentToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CommentToCommentConnectionEdge {
  readonly __typename: 'CommentToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Comment>;
}

/** Connection between the User type and the EnqueuedScript type */
export interface UserToEnqueuedScriptConnection {
  readonly __typename: 'UserToEnqueuedScriptConnection';
  /**
   * Edges for the UserToEnqueuedScriptConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<UserToEnqueuedScriptConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<EnqueuedScript>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToEnqueuedScriptConnectionEdge {
  readonly __typename: 'UserToEnqueuedScriptConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<EnqueuedScript>;
}

/** Script enqueued by the CMS */
export interface EnqueuedScript extends Node, EnqueuedAsset {
  readonly __typename: 'EnqueuedScript';
  /**
   * @todo
   * @deprecated
   */
  readonly args: Maybe<Scalars['Boolean']>;
  /**
   * Dependencies needed to use this asset
   * @deprecated
   */
  readonly dependencies: Maybe<ReadonlyArray<Maybe<EnqueuedScript>>>;
  /**
   * Extra information needed for the script
   * @deprecated
   */
  readonly extra: Maybe<Scalars['String']>;
  /**
   * The handle of the enqueued asset
   * @deprecated
   */
  readonly handle: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * The source of the asset
   * @deprecated
   */
  readonly src: Maybe<Scalars['String']>;
  /**
   * The version of the enqueued asset
   * @deprecated
   */
  readonly version: Maybe<Scalars['String']>;
}

/** Asset enqueued by the CMS */
export interface EnqueuedAsset {
  /** @todo */
  readonly args: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  readonly dependencies: Maybe<ReadonlyArray<Maybe<EnqueuedScript>>>;
  /** Extra information needed for the script */
  readonly extra: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  readonly handle: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  readonly id: Scalars['ID'];
  /** The source of the asset */
  readonly src: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  readonly version: Maybe<Scalars['String']>;
}

/** Connection between the User type and the EnqueuedStylesheet type */
export interface UserToEnqueuedStylesheetConnection {
  readonly __typename: 'UserToEnqueuedStylesheetConnection';
  /**
   * Edges for the UserToEnqueuedStylesheetConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<UserToEnqueuedStylesheetConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<EnqueuedStylesheet>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToEnqueuedStylesheetConnectionEdge {
  readonly __typename: 'UserToEnqueuedStylesheetConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<EnqueuedStylesheet>;
}

/** Stylesheet enqueued by the CMS */
export interface EnqueuedStylesheet extends Node, EnqueuedAsset {
  readonly __typename: 'EnqueuedStylesheet';
  /**
   * @todo
   * @deprecated
   */
  readonly args: Maybe<Scalars['Boolean']>;
  /**
   * Dependencies needed to use this asset
   * @deprecated
   */
  readonly dependencies: Maybe<ReadonlyArray<Maybe<EnqueuedScript>>>;
  /**
   * Extra information needed for the script
   * @deprecated
   */
  readonly extra: Maybe<Scalars['String']>;
  /**
   * The handle of the enqueued asset
   * @deprecated
   */
  readonly handle: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * The source of the asset
   * @deprecated
   */
  readonly src: Maybe<Scalars['String']>;
  /**
   * The version of the enqueued asset
   * @deprecated
   */
  readonly version: Maybe<Scalars['String']>;
}

/** Arguments for filtering the UserToMediaItemConnection connection */
export interface UserToMediaItemConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the User type and the mediaItem type */
export interface UserToMediaItemConnection {
  readonly __typename: 'UserToMediaItemConnection';
  /**
   * Edges for the UserToMediaItemConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<UserToMediaItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<MediaItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToMediaItemConnectionEdge {
  readonly __typename: 'UserToMediaItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<MediaItem>;
}

/** The mediaItem type */
export interface MediaItem extends Node, ContentNode, DatabaseIdentifier, UniformResourceIdentifiable, NodeWithTitle, NodeWithAuthor, NodeWithComments, HierarchicalContentNode {
  readonly __typename: 'MediaItem';
  /**
   * Alternative text to display when resource is not displayed
   * @deprecated
   */
  readonly altText: Maybe<Scalars['String']>;
  /**
   * Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated
   */
  readonly ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /**
   * Connection between the NodeWithAuthor type and the User type
   * @deprecated
   */
  readonly author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /**
   * The database identifier of the author of the node
   * @deprecated
   */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the author of the node
   * @deprecated
   */
  readonly authorId: Maybe<Scalars['ID']>;
  /**
   * The caption for the resource
   * @deprecated
   */
  readonly caption: Maybe<Scalars['String']>;
  /**
   * Connection between the HierarchicalContentNode type and the ContentNode type
   * @deprecated
   */
  readonly children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated
   */
  readonly commentCount: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  readonly commentStatus: Maybe<Scalars['String']>;
  /**
   * Connection between the mediaItem type and the Comment type
   * @deprecated
   */
  readonly comments: Maybe<MediaItemToCommentConnection>;
  /**
   * Connection between the mediaItem type and the ContentType type
   * @deprecated
   */
  readonly contentType: Maybe<MediaItemToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated
   */
  readonly date: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  readonly dateGmt: Maybe<Scalars['String']>;
  /**
   * Description of the image (stored as post_content)
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated
   */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  readonly editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  readonly enclosure: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * The filesize in bytes of the resource
   * @deprecated
   */
  readonly fileSize: Maybe<Scalars['Int']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  readonly guid: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the attachment object.
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated
   */
  readonly lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * Details about the mediaItem
   * @deprecated
   */
  readonly mediaDetails: Maybe<MediaDetails>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly mediaItemId: Scalars['Int'];
  /**
   * Url of the mediaItem
   * @deprecated
   */
  readonly mediaItemUrl: Maybe<Scalars['String']>;
  /**
   * Type of resource
   * @deprecated
   */
  readonly mediaType: Maybe<Scalars['String']>;
  /**
   * The mime type of the mediaItem
   * @deprecated
   */
  readonly mimeType: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated
   */
  readonly modified: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /**
   * The parent of the node. The parent object can be of various types
   * @deprecated
   */
  readonly parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated
   */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated
   */
  readonly parentId: Maybe<Scalars['ID']>;
  /**
   * The database id of the preview node
   * @deprecated
   */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /**
   * The sizes attribute value for an image.
   * @deprecated
   */
  readonly sizes: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * Url of the mediaItem
   * @deprecated
   */
  readonly sourceUrl: Maybe<Scalars['String']>;
  /**
   * The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths.
   * @deprecated
   */
  readonly srcSet: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated
   */
  readonly status: Maybe<Scalars['String']>;
  /**
   * The template assigned to the node
   * @deprecated
   */
  readonly template: Maybe<ContentTemplate>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated
   */
  readonly title: Maybe<Scalars['String']>;
  /**
   * URI path for the resource
   * @deprecated
   */
  readonly uri: Scalars['String'];
}


/** The mediaItem type */
export interface MediaItemAncestorsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
}


/** The mediaItem type */
export interface MediaItemCaptionArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** The mediaItem type */
export interface MediaItemChildrenArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
}


/** The mediaItem type */
export interface MediaItemCommentsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<MediaItemToCommentConnectionWhereArgs>;
}


/** The mediaItem type */
export interface MediaItemDescriptionArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** The mediaItem type */
export interface MediaItemEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The mediaItem type */
export interface MediaItemEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The mediaItem type */
export interface MediaItemFileSizeArgs {
  size: Maybe<MediaItemSizeEnum>;
}


/** The mediaItem type */
export interface MediaItemSizesArgs {
  size: Maybe<MediaItemSizeEnum>;
}


/** The mediaItem type */
export interface MediaItemSourceUrlArgs {
  size: Maybe<MediaItemSizeEnum>;
}


/** The mediaItem type */
export interface MediaItemSrcSetArgs {
  size: Maybe<MediaItemSizeEnum>;
}


/** The mediaItem type */
export interface MediaItemTitleArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}

/** A node that NodeWith a title */
export interface NodeWithTitle {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
}


/** A node that NodeWith a title */
export interface NodeWithTitleTitleArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}

/** A node that can have an author assigned to it */
export interface NodeWithAuthor {
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
}

/** Connection between the NodeWithAuthor type and the User type */
export interface NodeWithAuthorToUserConnectionEdge {
  readonly __typename: 'NodeWithAuthorToUserConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<User>;
}

/** A node that can have comments associated with it */
export interface NodeWithComments {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
}

/** Content node with hierarchical (parent/child) relationships */
export interface HierarchicalContentNode {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  readonly children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The parent of the node. The parent object can be of various types */
  readonly parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
}


/** Content node with hierarchical (parent/child) relationships */
export interface HierarchicalContentNodeAncestorsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
}


/** Content node with hierarchical (parent/child) relationships */
export interface HierarchicalContentNodeChildrenArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
}

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export interface HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs {
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export interface HierarchicalContentNodeToContentNodeAncestorsConnection {
  readonly __typename: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
  /**
   * Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface HierarchicalContentNodeToContentNodeAncestorsConnectionEdge {
  readonly __typename: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export interface HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs {
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export interface HierarchicalContentNodeToContentNodeChildrenConnection {
  readonly __typename: 'HierarchicalContentNodeToContentNodeChildrenConnection';
  /**
   * Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface HierarchicalContentNodeToContentNodeChildrenConnectionEdge {
  readonly __typename: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export interface HierarchicalContentNodeToParentContentNodeConnectionEdge {
  readonly __typename: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** Arguments for filtering the MediaItemToCommentConnection connection */
export interface MediaItemToCommentConnectionWhereArgs {
  /** Comment author email address. */
  readonly authorEmail: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: Maybe<ReadonlyArray<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: Maybe<Scalars['ID']>;
}

/** Connection between the mediaItem type and the Comment type */
export interface MediaItemToCommentConnection {
  readonly __typename: 'MediaItemToCommentConnection';
  /**
   * Edges for the MediaItemToCommentConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<MediaItemToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface MediaItemToCommentConnectionEdge {
  readonly __typename: 'MediaItemToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Comment>;
}

/** Connection between the mediaItem type and the ContentType type */
export interface MediaItemToContentTypeConnectionEdge {
  readonly __typename: 'MediaItemToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<ContentType>;
}

/** Connection between the ContentNode type and the EnqueuedScript type */
export interface ContentNodeToEnqueuedScriptConnection {
  readonly __typename: 'ContentNodeToEnqueuedScriptConnection';
  /**
   * Edges for the ContentNodeToEnqueuedScriptConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ContentNodeToEnqueuedScriptConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<EnqueuedScript>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ContentNodeToEnqueuedScriptConnectionEdge {
  readonly __typename: 'ContentNodeToEnqueuedScriptConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<EnqueuedScript>;
}

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export interface ContentNodeToEnqueuedStylesheetConnection {
  readonly __typename: 'ContentNodeToEnqueuedStylesheetConnection';
  /**
   * Edges for the ContentNodeToEnqueuedStylesheetConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ContentNodeToEnqueuedStylesheetConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<EnqueuedStylesheet>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ContentNodeToEnqueuedStylesheetConnectionEdge {
  readonly __typename: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<EnqueuedStylesheet>;
}

/** The size of the media item object. */
export enum MediaItemSizeEnum {
  /** MediaItem with the exponent-blog-image size */
  ExponentBlogImage = 'EXPONENT_BLOG_IMAGE',
  /** MediaItem with the exponent-blog-image-with-aspect-ratio size */
  ExponentBlogImageWithAspectRatio = 'EXPONENT_BLOG_IMAGE_WITH_ASPECT_RATIO',
  /** MediaItem with the exponent-carousel-thumb size */
  ExponentCarouselThumb = 'EXPONENT_CAROUSEL_THUMB',
  /** MediaItem with the gallery size */
  Gallery = 'GALLERY',
  /** MediaItem with the gallery-masonry size */
  GalleryMasonry = 'GALLERY_MASONRY',
  /** MediaItem with the large size */
  Large = 'LARGE',
  /** MediaItem with the medium size */
  Medium = 'MEDIUM',
  /** MediaItem with the medium_large size */
  MediumLarge = 'MEDIUM_LARGE',
  /** MediaItem with the shop_catalog size */
  ShopCatalog = 'SHOP_CATALOG',
  /** MediaItem with the shop_single size */
  ShopSingle = 'SHOP_SINGLE',
  /** MediaItem with the shop_thumbnail size */
  ShopThumbnail = 'SHOP_THUMBNAIL',
  /** MediaItem with the tatsu_lazyload_thumb size */
  TatsuLazyloadThumb = 'TATSU_LAZYLOAD_THUMB',
  /** MediaItem with the thumbnail size */
  Thumbnail = 'THUMBNAIL',
  /** MediaItem with the woocommerce_gallery_thumbnail size */
  WoocommerceGalleryThumbnail = 'WOOCOMMERCE_GALLERY_THUMBNAIL',
  /** MediaItem with the woocommerce_single size */
  WoocommerceSingle = 'WOOCOMMERCE_SINGLE',
  /** MediaItem with the woocommerce_thumbnail size */
  WoocommerceThumbnail = 'WOOCOMMERCE_THUMBNAIL',
  /** MediaItem with the 1536x1536 size */
  '1536X1536' = '_1536X1536',
  /** MediaItem with the 2048x2048 size */
  '2048X2048' = '_2048X2048',
  /** MediaItem with the 2col-gallery size */
  '2ColGallery' = '_2COL_GALLERY',
  /** MediaItem with the 2col-gallery-masonry size */
  '2ColGalleryMasonry' = '_2COL_GALLERY_MASONRY',
  /** MediaItem with the 3col-gallery-wide-height size */
  '3ColGalleryWideHeight' = '_3COL_GALLERY_WIDE_HEIGHT',
  /** MediaItem with the 3col-gallery-wide-width size */
  '3ColGalleryWideWidth' = '_3COL_GALLERY_WIDE_WIDTH',
  /** MediaItem with the 3col-gallery-wide-width-height size */
  '3ColGalleryWideWidthHeight' = '_3COL_GALLERY_WIDE_WIDTH_HEIGHT'
}

/** Connection between the ContentNode type and the User type */
export interface ContentNodeToEditLastConnectionEdge {
  readonly __typename: 'ContentNodeToEditLastConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<User>;
}

/** File details for a Media Item */
export interface MediaDetails {
  readonly __typename: 'MediaDetails';
  /**
   * The height of the mediaItem
   * @deprecated
   */
  readonly file: Maybe<Scalars['String']>;
  /**
   * The height of the mediaItem
   * @deprecated
   */
  readonly height: Maybe<Scalars['Int']>;
  /** @deprecated  */
  readonly meta: Maybe<MediaItemMeta>;
  /**
   * The available sizes of the mediaItem
   * @deprecated
   */
  readonly sizes: Maybe<ReadonlyArray<Maybe<MediaSize>>>;
  /**
   * The width of the mediaItem
   * @deprecated
   */
  readonly width: Maybe<Scalars['Int']>;
}

/** Meta connected to a MediaItem */
export interface MediaItemMeta {
  readonly __typename: 'MediaItemMeta';
  /** @deprecated  */
  readonly aperture: Maybe<Scalars['Float']>;
  /** @deprecated  */
  readonly camera: Maybe<Scalars['String']>;
  /** @deprecated  */
  readonly caption: Maybe<Scalars['String']>;
  /** @deprecated  */
  readonly copyright: Maybe<Scalars['String']>;
  /** @deprecated  */
  readonly createdTimestamp: Maybe<Scalars['Int']>;
  /** @deprecated  */
  readonly credit: Maybe<Scalars['String']>;
  /** @deprecated  */
  readonly focalLength: Maybe<Scalars['Float']>;
  /** @deprecated  */
  readonly iso: Maybe<Scalars['Int']>;
  /** @deprecated  */
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** @deprecated  */
  readonly orientation: Maybe<Scalars['String']>;
  /** @deprecated  */
  readonly shutterSpeed: Maybe<Scalars['Float']>;
  /** @deprecated  */
  readonly title: Maybe<Scalars['String']>;
}

/** Details of an available size for a media item */
export interface MediaSize {
  readonly __typename: 'MediaSize';
  /**
   * The file of the for the referenced size
   * @deprecated
   */
  readonly file: Maybe<Scalars['String']>;
  /**
   * The filesize of the resource
   * @deprecated
   */
  readonly fileSize: Maybe<Scalars['Int']>;
  /**
   * The height of the for the referenced size
   * @deprecated
   */
  readonly height: Maybe<Scalars['String']>;
  /**
   * The mime type of the resource
   * @deprecated
   */
  readonly mimeType: Maybe<Scalars['String']>;
  /**
   * The referenced size name
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * The url of the for the referenced size
   * @deprecated
   */
  readonly sourceUrl: Maybe<Scalars['String']>;
  /**
   * The width of the for the referenced size
   * @deprecated
   */
  readonly width: Maybe<Scalars['String']>;
}

/** The template assigned to a node of content */
export interface ContentTemplate {
  /** The file the template uses */
  readonly templateFile: Maybe<Scalars['String']>;
  /** The name of the template */
  readonly templateName: Maybe<Scalars['String']>;
}

/** Arguments for filtering the UserToPageConnection connection */
export interface UserToPageConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the User type and the page type */
export interface UserToPageConnection {
  readonly __typename: 'UserToPageConnection';
  /**
   * Edges for the UserToPageConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<UserToPageConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Page>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToPageConnectionEdge {
  readonly __typename: 'UserToPageConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Page>;
}

/** The page type */
export interface Page extends Node, ContentNode, DatabaseIdentifier, UniformResourceIdentifiable, NodeWithTitle, NodeWithContentEditor, NodeWithAuthor, NodeWithFeaturedImage, NodeWithComments, NodeWithRevisions, NodeWithPageAttributes, HierarchicalContentNode, MenuItemLinkable {
  readonly __typename: 'Page';
  /**
   * Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated
   */
  readonly ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /**
   * Connection between the NodeWithAuthor type and the User type
   * @deprecated
   */
  readonly author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /**
   * The database identifier of the author of the node
   * @deprecated
   */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the author of the node
   * @deprecated
   */
  readonly authorId: Maybe<Scalars['ID']>;
  /**
   * Connection between the HierarchicalContentNode type and the ContentNode type
   * @deprecated
   */
  readonly children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated
   */
  readonly commentCount: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  readonly commentStatus: Maybe<Scalars['String']>;
  /**
   * Connection between the page type and the Comment type
   * @deprecated
   */
  readonly comments: Maybe<PageToCommentConnection>;
  /**
   * The content of the post.
   * @deprecated
   */
  readonly content: Maybe<Scalars['String']>;
  /**
   * Connection between the page type and the ContentType type
   * @deprecated
   */
  readonly contentType: Maybe<PageToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated
   */
  readonly date: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  readonly dateGmt: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated
   */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  readonly editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  readonly enclosure: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated
   */
  readonly featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated
   */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated
   */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  readonly guid: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the page object.
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether this page is set to the static front page.
   * @deprecated
   */
  readonly isFrontPage: Scalars['Boolean'];
  /**
   * Whether this page is set to the blog posts page.
   * @deprecated
   */
  readonly isPostsPage: Scalars['Boolean'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * True if the node is a revision of another node
   * @deprecated
   */
  readonly isRevision: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated
   */
  readonly lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated
   */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated
   */
  readonly modified: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly pageId: Scalars['Int'];
  /**
   * The parent of the node. The parent object can be of various types
   * @deprecated
   */
  readonly parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated
   */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated
   */
  readonly parentId: Maybe<Scalars['ID']>;
  /**
   * Connection between the page type and the page type
   * @deprecated
   */
  readonly preview: Maybe<PageToPreviewConnectionEdge>;
  /**
   * The database id of the preview node
   * @deprecated
   */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /**
   * If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node.
   * @deprecated
   */
  readonly revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /**
   * Connection between the page type and the page type
   * @deprecated
   */
  readonly revisions: Maybe<PageToRevisionConnection>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated
   */
  readonly status: Maybe<Scalars['String']>;
  /**
   * The template assigned to the node
   * @deprecated
   */
  readonly template: Maybe<ContentTemplate>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated
   */
  readonly title: Maybe<Scalars['String']>;
  /**
   * URI path for the resource
   * @deprecated
   */
  readonly uri: Scalars['String'];
}


/** The page type */
export interface PageAncestorsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
}


/** The page type */
export interface PageChildrenArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
}


/** The page type */
export interface PageCommentsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PageToCommentConnectionWhereArgs>;
}


/** The page type */
export interface PageContentArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** The page type */
export interface PageEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The page type */
export interface PageEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The page type */
export interface PageRevisionsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PageToRevisionConnectionWhereArgs>;
}


/** The page type */
export interface PageTitleArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}

/** A node that supports the content editor */
export interface NodeWithContentEditor {
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']>;
}


/** A node that supports the content editor */
export interface NodeWithContentEditorContentArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}

/** A node that can have a featured image set */
export interface NodeWithFeaturedImage {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
}

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export interface NodeWithFeaturedImageToMediaItemConnectionEdge {
  readonly __typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<MediaItem>;
}

/** A node that can have revisions */
export interface NodeWithRevisions {
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  readonly revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
}

/** Connection between the NodeWithRevisions type and the ContentNode type */
export interface NodeWithRevisionsToContentNodeConnectionEdge {
  readonly __typename: 'NodeWithRevisionsToContentNodeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** A node that can have page attributes */
export interface NodeWithPageAttributes {
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: Maybe<Scalars['Int']>;
}

/** Nodes that can be linked to as Menu Items */
export interface MenuItemLinkable {
  /** The unique resource identifier path */
  readonly databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** The unique resource identifier path */
  readonly uri: Scalars['String'];
}

/** Arguments for filtering the PageToCommentConnection connection */
export interface PageToCommentConnectionWhereArgs {
  /** Comment author email address. */
  readonly authorEmail: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: Maybe<ReadonlyArray<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: Maybe<Scalars['ID']>;
}

/** Connection between the page type and the Comment type */
export interface PageToCommentConnection {
  readonly __typename: 'PageToCommentConnection';
  /**
   * Edges for the PageToCommentConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<PageToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PageToCommentConnectionEdge {
  readonly __typename: 'PageToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Comment>;
}

/** Connection between the page type and the ContentType type */
export interface PageToContentTypeConnectionEdge {
  readonly __typename: 'PageToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<ContentType>;
}

/** Connection between the page type and the page type */
export interface PageToPreviewConnectionEdge {
  readonly __typename: 'PageToPreviewConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<Page>;
}

/** Arguments for filtering the pageToRevisionConnection connection */
export interface PageToRevisionConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the page type and the page type */
export interface PageToRevisionConnection {
  readonly __typename: 'PageToRevisionConnection';
  /**
   * Edges for the pageToRevisionConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<PageToRevisionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Page>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PageToRevisionConnectionEdge {
  readonly __typename: 'PageToRevisionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Page>;
}

/** Arguments for filtering the UserToPostConnection connection */
export interface UserToPostConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Category ID */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  readonly categoryName: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Tag Slug */
  readonly tag: Maybe<Scalars['String']>;
  /** Use Tag ID */
  readonly tagId: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  readonly tagSlugAnd: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  readonly tagSlugIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the User type and the post type */
export interface UserToPostConnection {
  readonly __typename: 'UserToPostConnection';
  /**
   * Edges for the UserToPostConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<UserToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToPostConnectionEdge {
  readonly __typename: 'UserToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Post>;
}

/** The post type */
export interface Post extends Node, ContentNode, DatabaseIdentifier, UniformResourceIdentifiable, NodeWithTitle, NodeWithContentEditor, NodeWithAuthor, NodeWithFeaturedImage, NodeWithExcerpt, NodeWithComments, NodeWithTrackbacks, NodeWithRevisions, MenuItemLinkable {
  readonly __typename: 'Post';
  /**
   * Connection between the NodeWithAuthor type and the User type
   * @deprecated
   */
  readonly author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /**
   * The database identifier of the author of the node
   * @deprecated
   */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the author of the node
   * @deprecated
   */
  readonly authorId: Maybe<Scalars['ID']>;
  /**
   * Connection between the post type and the category type
   * @deprecated
   */
  readonly categories: Maybe<PostToCategoryConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated
   */
  readonly commentCount: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  readonly commentStatus: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the Comment type
   * @deprecated
   */
  readonly comments: Maybe<PostToCommentConnection>;
  /**
   * The content of the post.
   * @deprecated
   */
  readonly content: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the ContentType type
   * @deprecated
   */
  readonly contentType: Maybe<PostToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated
   */
  readonly date: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  readonly dateGmt: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated
   */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  readonly editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  readonly enclosure: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * The excerpt of the post.
   * @deprecated
   */
  readonly excerpt: Maybe<Scalars['String']>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated
   */
  readonly featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated
   */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated
   */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  readonly guid: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the post object.
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * True if the node is a revision of another node
   * @deprecated
   */
  readonly isRevision: Maybe<Scalars['Boolean']>;
  /**
   * Whether this page is sticky
   * @deprecated
   */
  readonly isSticky: Scalars['Boolean'];
  /**
   * The user that most recently edited the node
   * @deprecated
   */
  readonly lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated
   */
  readonly modified: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated
   */
  readonly pingStatus: Maybe<Scalars['String']>;
  /**
   * URLs that have been pinged.
   * @deprecated
   */
  readonly pinged: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * Connection between the post type and the postFormat type
   * @deprecated
   */
  readonly postFormats: Maybe<PostToPostFormatConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly postId: Scalars['Int'];
  /**
   * Connection between the post type and the post type
   * @deprecated
   */
  readonly preview: Maybe<PostToPreviewConnectionEdge>;
  /**
   * The database id of the preview node
   * @deprecated
   */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /**
   * If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node.
   * @deprecated
   */
  readonly revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /**
   * Connection between the post type and the post type
   * @deprecated
   */
  readonly revisions: Maybe<PostToRevisionConnection>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated
   */
  readonly status: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the tag type
   * @deprecated
   */
  readonly tags: Maybe<PostToTagConnection>;
  /**
   * The template assigned to the node
   * @deprecated
   */
  readonly template: Maybe<ContentTemplate>;
  /**
   * Connection between the post type and the TermNode type
   * @deprecated
   */
  readonly terms: Maybe<PostToTermNodeConnection>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated
   */
  readonly title: Maybe<Scalars['String']>;
  /**
   * URLs queued to be pinged.
   * @deprecated
   */
  readonly toPing: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * URI path for the resource
   * @deprecated
   */
  readonly uri: Scalars['String'];
}


/** The post type */
export interface PostCategoriesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostToCategoryConnectionWhereArgs>;
}


/** The post type */
export interface PostCommentsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostToCommentConnectionWhereArgs>;
}


/** The post type */
export interface PostContentArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** The post type */
export interface PostEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The post type */
export interface PostEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The post type */
export interface PostExcerptArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** The post type */
export interface PostPostFormatsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostToPostFormatConnectionWhereArgs>;
}


/** The post type */
export interface PostRevisionsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostToRevisionConnectionWhereArgs>;
}


/** The post type */
export interface PostTagsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostToTagConnectionWhereArgs>;
}


/** The post type */
export interface PostTermsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostToTermNodeConnectionWhereArgs>;
}


/** The post type */
export interface PostTitleArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}

/** A node that can have an excerpt */
export interface NodeWithExcerpt {
  /** The excerpt of the post. */
  readonly excerpt: Maybe<Scalars['String']>;
}


/** A node that can have an excerpt */
export interface NodeWithExcerptExcerptArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}

/** A node that can have trackbacks and pingbacks */
export interface NodeWithTrackbacks {
  /** Whether the pings are open or closed for this particular post. */
  readonly pingStatus: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  readonly pinged: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  readonly toPing: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

/** Arguments for filtering the PostToCategoryConnection connection */
export interface PostToCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  Count = 'COUNT',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Slug = 'SLUG',
  TermGroup = 'TERM_GROUP',
  TermId = 'TERM_ID',
  TermOrder = 'TERM_ORDER'
}

/** Connection between the post type and the category type */
export interface PostToCategoryConnection {
  readonly __typename: 'PostToCategoryConnection';
  /**
   * Edges for the PostToCategoryConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<PostToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostToCategoryConnectionEdge {
  readonly __typename: 'PostToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Category>;
}

/** The category type */
export interface Category extends Node, TermNode, DatabaseIdentifier, UniformResourceIdentifiable, HierarchicalTermNode, MenuItemLinkable {
  readonly __typename: 'Category';
  /**
   * The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated
   */
  readonly ancestors: Maybe<CategoryToAncestorsCategoryConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly categoryId: Maybe<Scalars['Int']>;
  /**
   * Connection between the category type and the category type
   * @deprecated
   */
  readonly children: Maybe<CategoryToCategoryConnection>;
  /**
   * Connection between the category type and the ContentNode type
   * @deprecated
   */
  readonly contentNodes: Maybe<CategoryToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated
   */
  readonly count: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Connection between the category type and the category type
   * @deprecated
   */
  readonly parent: Maybe<CategoryToParentCategoryConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated
   */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated
   */
  readonly parentId: Maybe<Scalars['ID']>;
  /**
   * Connection between the category type and the post type
   * @deprecated
   */
  readonly posts: Maybe<CategoryToPostConnection>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * Connection between the category type and the Taxonomy type
   * @deprecated
   */
  readonly taxonomy: Maybe<CategoryToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated
   */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated
   */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated
   */
  readonly uri: Scalars['String'];
}


/** The category type */
export interface CategoryAncestorsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The category type */
export interface CategoryChildrenArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CategoryToCategoryConnectionWhereArgs>;
}


/** The category type */
export interface CategoryContentNodesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CategoryToContentNodeConnectionWhereArgs>;
}


/** The category type */
export interface CategoryEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The category type */
export interface CategoryEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The category type */
export interface CategoryPostsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CategoryToPostConnectionWhereArgs>;
}

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export interface TermNode {
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** Unique identifier for the term */
  readonly id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Scalars['String'];
}


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export interface TermNodeEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export interface TermNodeEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}

/** Connection between the TermNode type and the EnqueuedScript type */
export interface TermNodeToEnqueuedScriptConnection {
  readonly __typename: 'TermNodeToEnqueuedScriptConnection';
  /**
   * Edges for the TermNodeToEnqueuedScriptConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<TermNodeToEnqueuedScriptConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<EnqueuedScript>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface TermNodeToEnqueuedScriptConnectionEdge {
  readonly __typename: 'TermNodeToEnqueuedScriptConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<EnqueuedScript>;
}

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export interface TermNodeToEnqueuedStylesheetConnection {
  readonly __typename: 'TermNodeToEnqueuedStylesheetConnection';
  /**
   * Edges for the TermNodeToEnqueuedStylesheetConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<TermNodeToEnqueuedStylesheetConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<EnqueuedStylesheet>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface TermNodeToEnqueuedStylesheetConnectionEdge {
  readonly __typename: 'TermNodeToEnqueuedStylesheetConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<EnqueuedStylesheet>;
}

/** Term node with hierarchical (parent/child) relationships */
export interface HierarchicalTermNode {
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
}

/** Connection between the category type and the category type */
export interface CategoryToAncestorsCategoryConnection {
  readonly __typename: 'CategoryToAncestorsCategoryConnection';
  /**
   * Edges for the CategoryToAncestorsCategoryConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<CategoryToAncestorsCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CategoryToAncestorsCategoryConnectionEdge {
  readonly __typename: 'CategoryToAncestorsCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Category>;
}

/** Arguments for filtering the CategoryToCategoryConnection connection */
export interface CategoryToCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the category type and the category type */
export interface CategoryToCategoryConnection {
  readonly __typename: 'CategoryToCategoryConnection';
  /**
   * Edges for the CategoryToCategoryConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<CategoryToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CategoryToCategoryConnectionEdge {
  readonly __typename: 'CategoryToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Category>;
}

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export interface CategoryToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the category type and the ContentNode type */
export interface CategoryToContentNodeConnection {
  readonly __typename: 'CategoryToContentNodeConnection';
  /**
   * Edges for the CategoryToContentNodeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<CategoryToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CategoryToContentNodeConnectionEdge {
  readonly __typename: 'CategoryToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** Connection between the category type and the category type */
export interface CategoryToParentCategoryConnectionEdge {
  readonly __typename: 'CategoryToParentCategoryConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<Category>;
}

/** Arguments for filtering the CategoryToPostConnection connection */
export interface CategoryToPostConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Category ID */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  readonly categoryName: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Tag Slug */
  readonly tag: Maybe<Scalars['String']>;
  /** Use Tag ID */
  readonly tagId: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  readonly tagSlugAnd: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  readonly tagSlugIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the category type and the post type */
export interface CategoryToPostConnection {
  readonly __typename: 'CategoryToPostConnection';
  /**
   * Edges for the CategoryToPostConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<CategoryToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CategoryToPostConnectionEdge {
  readonly __typename: 'CategoryToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Post>;
}

/** Connection between the category type and the Taxonomy type */
export interface CategoryToTaxonomyConnectionEdge {
  readonly __typename: 'CategoryToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<Taxonomy>;
}

/** Arguments for filtering the PostToCommentConnection connection */
export interface PostToCommentConnectionWhereArgs {
  /** Comment author email address. */
  readonly authorEmail: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: Maybe<ReadonlyArray<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: Maybe<Scalars['ID']>;
}

/** Connection between the post type and the Comment type */
export interface PostToCommentConnection {
  readonly __typename: 'PostToCommentConnection';
  /**
   * Edges for the PostToCommentConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<PostToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostToCommentConnectionEdge {
  readonly __typename: 'PostToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Comment>;
}

/** Connection between the post type and the ContentType type */
export interface PostToContentTypeConnectionEdge {
  readonly __typename: 'PostToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<ContentType>;
}

/** Arguments for filtering the PostToPostFormatConnection connection */
export interface PostToPostFormatConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the post type and the postFormat type */
export interface PostToPostFormatConnection {
  readonly __typename: 'PostToPostFormatConnection';
  /**
   * Edges for the PostToPostFormatConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<PostToPostFormatConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<PostFormat>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostToPostFormatConnectionEdge {
  readonly __typename: 'PostToPostFormatConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<PostFormat>;
}

/** The postFormat type */
export interface PostFormat extends Node, TermNode, DatabaseIdentifier, UniformResourceIdentifiable, MenuItemLinkable {
  readonly __typename: 'PostFormat';
  /**
   * Connection between the postFormat type and the ContentNode type
   * @deprecated
   */
  readonly contentNodes: Maybe<PostFormatToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated
   */
  readonly count: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly postFormatId: Maybe<Scalars['Int']>;
  /**
   * Connection between the postFormat type and the post type
   * @deprecated
   */
  readonly posts: Maybe<PostFormatToPostConnection>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * Connection between the postFormat type and the Taxonomy type
   * @deprecated
   */
  readonly taxonomy: Maybe<PostFormatToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated
   */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated
   */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated
   */
  readonly uri: Scalars['String'];
}


/** The postFormat type */
export interface PostFormatContentNodesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostFormatToContentNodeConnectionWhereArgs>;
}


/** The postFormat type */
export interface PostFormatEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The postFormat type */
export interface PostFormatEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The postFormat type */
export interface PostFormatPostsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostFormatToPostConnectionWhereArgs>;
}

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export interface PostFormatToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the postFormat type and the ContentNode type */
export interface PostFormatToContentNodeConnection {
  readonly __typename: 'PostFormatToContentNodeConnection';
  /**
   * Edges for the PostFormatToContentNodeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<PostFormatToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostFormatToContentNodeConnectionEdge {
  readonly __typename: 'PostFormatToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** Arguments for filtering the PostFormatToPostConnection connection */
export interface PostFormatToPostConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Category ID */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  readonly categoryName: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Tag Slug */
  readonly tag: Maybe<Scalars['String']>;
  /** Use Tag ID */
  readonly tagId: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  readonly tagSlugAnd: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  readonly tagSlugIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the postFormat type and the post type */
export interface PostFormatToPostConnection {
  readonly __typename: 'PostFormatToPostConnection';
  /**
   * Edges for the PostFormatToPostConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<PostFormatToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostFormatToPostConnectionEdge {
  readonly __typename: 'PostFormatToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Post>;
}

/** Connection between the postFormat type and the Taxonomy type */
export interface PostFormatToTaxonomyConnectionEdge {
  readonly __typename: 'PostFormatToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<Taxonomy>;
}

/** Connection between the post type and the post type */
export interface PostToPreviewConnectionEdge {
  readonly __typename: 'PostToPreviewConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<Post>;
}

/** Arguments for filtering the postToRevisionConnection connection */
export interface PostToRevisionConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Category ID */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  readonly categoryName: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Tag Slug */
  readonly tag: Maybe<Scalars['String']>;
  /** Use Tag ID */
  readonly tagId: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  readonly tagSlugAnd: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  readonly tagSlugIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the post type and the post type */
export interface PostToRevisionConnection {
  readonly __typename: 'PostToRevisionConnection';
  /**
   * Edges for the postToRevisionConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<PostToRevisionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostToRevisionConnectionEdge {
  readonly __typename: 'PostToRevisionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Post>;
}

/** Arguments for filtering the PostToTagConnection connection */
export interface PostToTagConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the post type and the tag type */
export interface PostToTagConnection {
  readonly __typename: 'PostToTagConnection';
  /**
   * Edges for the PostToTagConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<PostToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostToTagConnectionEdge {
  readonly __typename: 'PostToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Tag>;
}

/** The tag type */
export interface Tag extends Node, TermNode, DatabaseIdentifier, UniformResourceIdentifiable, MenuItemLinkable {
  readonly __typename: 'Tag';
  /**
   * Connection between the tag type and the ContentNode type
   * @deprecated
   */
  readonly contentNodes: Maybe<TagToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated
   */
  readonly count: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Connection between the tag type and the post type
   * @deprecated
   */
  readonly posts: Maybe<TagToPostConnection>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly tagId: Maybe<Scalars['Int']>;
  /**
   * Connection between the tag type and the Taxonomy type
   * @deprecated
   */
  readonly taxonomy: Maybe<TagToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated
   */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated
   */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated
   */
  readonly uri: Scalars['String'];
}


/** The tag type */
export interface TagContentNodesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<TagToContentNodeConnectionWhereArgs>;
}


/** The tag type */
export interface TagEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The tag type */
export interface TagEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The tag type */
export interface TagPostsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<TagToPostConnectionWhereArgs>;
}

/** Arguments for filtering the TagToContentNodeConnection connection */
export interface TagToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the tag type and the ContentNode type */
export interface TagToContentNodeConnection {
  readonly __typename: 'TagToContentNodeConnection';
  /**
   * Edges for the TagToContentNodeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<TagToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface TagToContentNodeConnectionEdge {
  readonly __typename: 'TagToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** Arguments for filtering the TagToPostConnection connection */
export interface TagToPostConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Category ID */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  readonly categoryName: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Tag Slug */
  readonly tag: Maybe<Scalars['String']>;
  /** Use Tag ID */
  readonly tagId: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  readonly tagSlugAnd: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  readonly tagSlugIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the tag type and the post type */
export interface TagToPostConnection {
  readonly __typename: 'TagToPostConnection';
  /**
   * Edges for the TagToPostConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<TagToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface TagToPostConnectionEdge {
  readonly __typename: 'TagToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Post>;
}

/** Connection between the tag type and the Taxonomy type */
export interface TagToTaxonomyConnectionEdge {
  readonly __typename: 'TagToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<Taxonomy>;
}

/** Arguments for filtering the PostToTermNodeConnection connection */
export interface PostToTermNodeConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  readonly taxonomies: Maybe<ReadonlyArray<Maybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Allowed taxonomies */
export enum TaxonomyEnum {
  Category = 'CATEGORY',
  Postformat = 'POSTFORMAT',
  Productcategory = 'PRODUCTCATEGORY',
  Producttag = 'PRODUCTTAG',
  Producttype = 'PRODUCTTYPE',
  Shippingclass = 'SHIPPINGCLASS',
  Tag = 'TAG',
  Visibleproduct = 'VISIBLEPRODUCT'
}

/** Connection between the post type and the TermNode type */
export interface PostToTermNodeConnection {
  readonly __typename: 'PostToTermNodeConnection';
  /**
   * Edges for the PostToTermNodeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<PostToTermNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<TermNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostToTermNodeConnectionEdge {
  readonly __typename: 'PostToTermNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<TermNode>;
}

/** Arguments for filtering the UserToContentRevisionUnionConnection connection */
export interface UserToContentRevisionUnionConnectionWhereArgs {
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the User type and the ContentRevisionUnion type */
export interface UserToContentRevisionUnionConnection {
  readonly __typename: 'UserToContentRevisionUnionConnection';
  /**
   * Edges for the UserToContentRevisionUnionConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<UserToContentRevisionUnionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentRevisionUnion>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToContentRevisionUnionConnectionEdge {
  readonly __typename: 'UserToContentRevisionUnionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentRevisionUnion>;
}

export type ContentRevisionUnion = Post | Page;

/** Connection between the User type and the UserRole type */
export interface UserToUserRoleConnection {
  readonly __typename: 'UserToUserRoleConnection';
  /**
   * Edges for the UserToUserRoleConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<UserToUserRoleConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<UserRole>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToUserRoleConnectionEdge {
  readonly __typename: 'UserToUserRoleConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<UserRole>;
}

/** A user role object */
export interface UserRole extends Node {
  readonly __typename: 'UserRole';
  /**
   * The capabilities that belong to this role
   * @deprecated
   */
  readonly capabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * The display name of the role
   * @deprecated
   */
  readonly displayName: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the user role object.
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The registered name of the role
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
}

/** Details for labels of the PostType */
export interface PostTypeLabelDetails {
  readonly __typename: 'PostTypeLabelDetails';
  /**
   * Default is ‘Add New’ for both hierarchical and non-hierarchical types.
   * @deprecated
   */
  readonly addNew: Maybe<Scalars['String']>;
  /**
   * Label for adding a new singular item.
   * @deprecated
   */
  readonly addNewItem: Maybe<Scalars['String']>;
  /**
   * Label to signify all items in a submenu link.
   * @deprecated
   */
  readonly allItems: Maybe<Scalars['String']>;
  /**
   * Label for archives in nav menus
   * @deprecated
   */
  readonly archives: Maybe<Scalars['String']>;
  /**
   * Label for the attributes meta box.
   * @deprecated
   */
  readonly attributes: Maybe<Scalars['String']>;
  /**
   * Label for editing a singular item.
   * @deprecated
   */
  readonly editItem: Maybe<Scalars['String']>;
  /**
   * Label for the Featured Image meta box title.
   * @deprecated
   */
  readonly featuredImage: Maybe<Scalars['String']>;
  /**
   * Label for the table views hidden heading.
   * @deprecated
   */
  readonly filterItemsList: Maybe<Scalars['String']>;
  /**
   * Label for the media frame button.
   * @deprecated
   */
  readonly insertIntoItem: Maybe<Scalars['String']>;
  /**
   * Label for the table hidden heading.
   * @deprecated
   */
  readonly itemsList: Maybe<Scalars['String']>;
  /**
   * Label for the table pagination hidden heading.
   * @deprecated
   */
  readonly itemsListNavigation: Maybe<Scalars['String']>;
  /**
   * Label for the menu name.
   * @deprecated
   */
  readonly menuName: Maybe<Scalars['String']>;
  /**
   * General name for the post type, usually plural.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Label for the new item page title.
   * @deprecated
   */
  readonly newItem: Maybe<Scalars['String']>;
  /**
   * Label used when no items are found.
   * @deprecated
   */
  readonly notFound: Maybe<Scalars['String']>;
  /**
   * Label used when no items are in the trash.
   * @deprecated
   */
  readonly notFoundInTrash: Maybe<Scalars['String']>;
  /**
   * Label used to prefix parents of hierarchical items.
   * @deprecated
   */
  readonly parentItemColon: Maybe<Scalars['String']>;
  /**
   * Label for removing the featured image.
   * @deprecated
   */
  readonly removeFeaturedImage: Maybe<Scalars['String']>;
  /**
   * Label for searching plural items.
   * @deprecated
   */
  readonly searchItems: Maybe<Scalars['String']>;
  /**
   * Label for setting the featured image.
   * @deprecated
   */
  readonly setFeaturedImage: Maybe<Scalars['String']>;
  /**
   * Name for one object of this post type.
   * @deprecated
   */
  readonly singularName: Maybe<Scalars['String']>;
  /**
   * Label for the media frame filter.
   * @deprecated
   */
  readonly uploadedToThisItem: Maybe<Scalars['String']>;
  /**
   * Label in the media frame for using a featured image.
   * @deprecated
   */
  readonly useFeaturedImage: Maybe<Scalars['String']>;
  /**
   * Label for viewing a singular item.
   * @deprecated
   */
  readonly viewItem: Maybe<Scalars['String']>;
  /**
   * Label for viewing post type archives.
   * @deprecated
   */
  readonly viewItems: Maybe<Scalars['String']>;
}

/** Coupon discount type enumeration */
export enum DiscountTypeEnum {
  FixedCart = 'FIXED_CART',
  FixedProduct = 'FIXED_PRODUCT',
  Percent = 'PERCENT'
}

/** Arguments for filtering the CouponToProductCategoryConnection connection */
export interface CouponToProductCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the Coupon type and the productCategory type */
export interface CouponToProductCategoryConnection {
  readonly __typename: 'CouponToProductCategoryConnection';
  /**
   * Edges for the CouponToProductCategoryConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<CouponToProductCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ProductCategory>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CouponToProductCategoryConnectionEdge {
  readonly __typename: 'CouponToProductCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ProductCategory>;
}

/** The productCategory type */
export interface ProductCategory extends Node, TermNode, DatabaseIdentifier, UniformResourceIdentifiable, HierarchicalTermNode, MenuItemLinkable {
  readonly __typename: 'ProductCategory';
  /**
   * The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated
   */
  readonly ancestors: Maybe<ProductCategoryToAncestorsProductCategoryConnection>;
  /**
   * Connection between the productCategory type and the productCategory type
   * @deprecated
   */
  readonly children: Maybe<ProductCategoryToProductCategoryConnection>;
  /**
   * Connection between the productCategory type and the ContentNode type
   * @deprecated
   */
  readonly contentNodes: Maybe<ProductCategoryToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated
   */
  readonly count: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * Product category display type
   * @deprecated
   */
  readonly display: Maybe<ProductCategoryDisplay>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Product category image
   * @deprecated
   */
  readonly image: Maybe<MediaItem>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * Product category menu order
   * @deprecated
   */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /**
   * The human friendly name of the object.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Connection between the productCategory type and the productCategory type
   * @deprecated
   */
  readonly parent: Maybe<ProductCategoryToParentProductCategoryConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated
   */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated
   */
  readonly parentId: Maybe<Scalars['ID']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly productCategoryId: Maybe<Scalars['Int']>;
  /**
   * Connection between the ProductCategory type and the Product type
   * @deprecated
   */
  readonly products: Maybe<ProductCategoryToProductConnection>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * Connection between the productCategory type and the Taxonomy type
   * @deprecated
   */
  readonly taxonomy: Maybe<ProductCategoryToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated
   */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated
   */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated
   */
  readonly uri: Scalars['String'];
}


/** The productCategory type */
export interface ProductCategoryAncestorsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The productCategory type */
export interface ProductCategoryChildrenArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductCategoryToProductCategoryConnectionWhereArgs>;
}


/** The productCategory type */
export interface ProductCategoryContentNodesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductCategoryToContentNodeConnectionWhereArgs>;
}


/** The productCategory type */
export interface ProductCategoryEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The productCategory type */
export interface ProductCategoryEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The productCategory type */
export interface ProductCategoryProductsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductCategoryToProductConnectionWhereArgs>;
}

/** Connection between the productCategory type and the productCategory type */
export interface ProductCategoryToAncestorsProductCategoryConnection {
  readonly __typename: 'ProductCategoryToAncestorsProductCategoryConnection';
  /**
   * Edges for the ProductCategoryToAncestorsProductCategoryConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductCategoryToAncestorsProductCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ProductCategory>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductCategoryToAncestorsProductCategoryConnectionEdge {
  readonly __typename: 'ProductCategoryToAncestorsProductCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ProductCategory>;
}

/** Arguments for filtering the ProductCategoryToProductCategoryConnection connection */
export interface ProductCategoryToProductCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the productCategory type and the productCategory type */
export interface ProductCategoryToProductCategoryConnection {
  readonly __typename: 'ProductCategoryToProductCategoryConnection';
  /**
   * Edges for the ProductCategoryToProductCategoryConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductCategoryToProductCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ProductCategory>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductCategoryToProductCategoryConnectionEdge {
  readonly __typename: 'ProductCategoryToProductCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ProductCategory>;
}

/** Arguments for filtering the ProductCategoryToContentNodeConnection connection */
export interface ProductCategoryToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the productCategory type and the ContentNode type */
export interface ProductCategoryToContentNodeConnection {
  readonly __typename: 'ProductCategoryToContentNodeConnection';
  /**
   * Edges for the ProductCategoryToContentNodeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductCategoryToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductCategoryToContentNodeConnectionEdge {
  readonly __typename: 'ProductCategoryToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** Product category display type enumeration */
export enum ProductCategoryDisplay {
  /** Display both products and subcategories of this category. */
  Both = 'BOTH',
  /** Display default content connected to this category. */
  Default = 'DEFAULT',
  /** Display products associated with this category. */
  Products = 'PRODUCTS',
  /** Display subcategories of this category. */
  Subcategories = 'SUBCATEGORIES'
}

/** Connection between the productCategory type and the productCategory type */
export interface ProductCategoryToParentProductCategoryConnectionEdge {
  readonly __typename: 'ProductCategoryToParentProductCategoryConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<ProductCategory>;
}

/** Arguments for filtering the ProductCategoryToProductConnection connection */
export interface ProductCategoryToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  readonly attribute: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  readonly attributeTerm: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly category: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  readonly categoryIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  readonly categoryIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  readonly featured: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  readonly maxPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  readonly minPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  readonly search: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  readonly shippingClassId: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  readonly sku: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  readonly slug: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  readonly status: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  readonly stockStatus: Maybe<ReadonlyArray<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  readonly supportedTypesOnly: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  readonly tag: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  readonly tagId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  readonly tagIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  readonly tagIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  readonly taxonomyFilter: Maybe<ReadonlyArray<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  readonly type: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  readonly typeIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  readonly typeNotIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  readonly visibility: Maybe<CatalogVisibilityEnum>;
}

/** Options for ordering the connection */
export interface ProductsOrderbyInput {
  readonly field: ProductsOrderByEnum;
  readonly order: Maybe<OrderEnum>;
}

/** Fields to order the Products connection by */
export enum ProductsOrderByEnum {
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by date product sale starts */
  OnSaleFrom = 'ON_SALE_FROM',
  /** Order by date product sale ends */
  OnSaleTo = 'ON_SALE_TO',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by product's current price */
  Price = 'PRICE',
  /** Order by product average rating */
  Rating = 'RATING',
  /** Order by product's regular price */
  RegularPrice = 'REGULAR_PRICE',
  /** Order by number of reviews on product */
  ReviewCount = 'REVIEW_COUNT',
  /** Order by product's sale price */
  SalePrice = 'SALE_PRICE',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by total sales of products sold */
  TotalSales = 'TOTAL_SALES'
}

/** Product stock status enumeration */
export enum StockStatusEnum {
  InStock = 'IN_STOCK',
  OnBackorder = 'ON_BACKORDER',
  OutOfStock = 'OUT_OF_STOCK'
}

/** Product taxonomy filter type */
export interface ProductTaxonomyFilterRelationInput {
  readonly and: Maybe<ReadonlyArray<Maybe<ProductTaxonomyFilterInput>>>;
  readonly or: Maybe<ReadonlyArray<Maybe<ProductTaxonomyFilterInput>>>;
}

/** Product filter */
export interface ProductTaxonomyFilterInput {
  /** A list of term ids */
  readonly ids: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Filter operation type */
  readonly operator: Maybe<TaxonomyOperatorEnum>;
  /** Which field to select taxonomy term by. */
  readonly taxonomy: ProductTaxonomyEnum;
  /** A list of term slugs */
  readonly terms: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

/** Taxonomy query operators */
export enum TaxonomyOperatorEnum {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Product taxonomies */
export enum ProductTaxonomyEnum {
  Productcategory = 'PRODUCTCATEGORY',
  Producttag = 'PRODUCTTAG',
  Producttype = 'PRODUCTTYPE',
  Shippingclass = 'SHIPPINGCLASS',
  Visibleproduct = 'VISIBLEPRODUCT'
}

/** Product type enumeration */
export enum ProductTypesEnum {
  /** An external product */
  External = 'EXTERNAL',
  /** A product group */
  Grouped = 'GROUPED',
  /** A simple product */
  Simple = 'SIMPLE',
  /** A variable product */
  Variable = 'VARIABLE',
  /** A product variation */
  Variation = 'VARIATION'
}

/** Product catalog visibility enumeration */
export enum CatalogVisibilityEnum {
  Catalog = 'CATALOG',
  Hidden = 'HIDDEN',
  Search = 'SEARCH',
  Visible = 'VISIBLE'
}

/** Connection between the ProductCategory type and the Product type */
export interface ProductCategoryToProductConnection {
  readonly __typename: 'ProductCategoryToProductConnection';
  /**
   * Edges for the ProductCategoryToProductConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductCategoryToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductCategoryToProductConnectionEdge {
  readonly __typename: 'ProductCategoryToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Product>;
}

/** Product object */
export interface Product {
  /** Connection between the Product type and the ProductAttribute type */
  readonly attributes: Maybe<ProductToProductAttributeConnection>;
  /** Product average count */
  readonly averageRating: Maybe<Scalars['Float']>;
  /** Catalog visibility */
  readonly catalogVisibility: Maybe<CatalogVisibilityEnum>;
  /** Connection between the Product type and the ContentType type */
  readonly contentType: Maybe<ProductToContentTypeConnectionEdge>;
  /** The ID of the product in the database */
  readonly databaseId: Scalars['Int'];
  /** Date product created */
  readonly date: Maybe<Scalars['String']>;
  /** Date on sale from */
  readonly dateOnSaleFrom: Maybe<Scalars['String']>;
  /** Date on sale to */
  readonly dateOnSaleTo: Maybe<Scalars['String']>;
  /** Product description */
  readonly description: Maybe<Scalars['String']>;
  /** If the product is featured */
  readonly featured: Maybe<Scalars['Boolean']>;
  /** Connection between the Product type and the MediaItem type */
  readonly galleryImages: Maybe<ProductToMediaItemConnection>;
  /** Connection between the Product type and the GlobalProductAttribute type */
  readonly globalAttributes: Maybe<ProductToGlobalProductAttributeConnection>;
  /** The globally unique identifier for the product */
  readonly id: Scalars['ID'];
  /** Main image */
  readonly image: Maybe<MediaItem>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** Connection between the Product type and the LocalProductAttribute type */
  readonly localAttributes: Maybe<ProductToLocalProductAttributeConnection>;
  /** Menu order */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /** Date product last updated */
  readonly modified: Maybe<Scalars['String']>;
  /** Product name */
  readonly name: Maybe<Scalars['String']>;
  /** Is product on sale? */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /** Parent product */
  readonly parent: Maybe<Product>;
  /** Connection between the Product type and the productCategory type */
  readonly productCategories: Maybe<ProductToProductCategoryConnection>;
  /** Connection between the Product type and the productTag type */
  readonly productTags: Maybe<ProductToProductTagConnection>;
  /** Connection between the Product type and the productType type */
  readonly productTypes: Maybe<ProductToProductTypeConnection>;
  /** Can product be purchased? */
  readonly purchasable: Maybe<Scalars['Boolean']>;
  /** Purchase note */
  readonly purchaseNote: Maybe<Scalars['String']>;
  /** Connection between the Product type and the Product type */
  readonly related: Maybe<ProductToProductConnection>;
  /** Product review count */
  readonly reviewCount: Maybe<Scalars['Int']>;
  /** Connection between the Product type and the Comment type */
  readonly reviews: Maybe<ProductToCommentConnection>;
  /** If reviews are allowed */
  readonly reviewsAllowed: Maybe<Scalars['Boolean']>;
  /** Connection between the Product type and the shippingClass type */
  readonly shippingClasses: Maybe<ProductToShippingClassConnection>;
  /** Product short description */
  readonly shortDescription: Maybe<Scalars['String']>;
  /** Product SKU */
  readonly sku: Maybe<Scalars['String']>;
  /** Product slug */
  readonly slug: Maybe<Scalars['String']>;
  /** Product status */
  readonly status: Maybe<Scalars['String']>;
  /** Number total of sales */
  readonly totalSales: Maybe<Scalars['Int']>;
  /** Product type */
  readonly type: Maybe<ProductTypesEnum>;
  /** Connection between the Product type and the Product type */
  readonly upsell: Maybe<ProductToProductConnection>;
  /** Connection between the Product type and the visibleProduct type */
  readonly visibleProducts: Maybe<ProductToVisibleProductConnection>;
}


/** Product object */
export interface ProductAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductAttributeConnectionWhereArgs>;
}


/** Product object */
export interface ProductDescriptionArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** Product object */
export interface ProductGalleryImagesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToMediaItemConnectionWhereArgs>;
}


/** Product object */
export interface ProductGlobalAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
}


/** Product object */
export interface ProductLocalAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
}


/** Product object */
export interface ProductProductCategoriesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductCategoryConnectionWhereArgs>;
}


/** Product object */
export interface ProductProductTagsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductTagConnectionWhereArgs>;
}


/** Product object */
export interface ProductProductTypesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductTypeConnectionWhereArgs>;
}


/** Product object */
export interface ProductRelatedArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductConnectionWhereArgs>;
}


/** Product object */
export interface ProductReviewsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToCommentConnectionWhereArgs>;
}


/** Product object */
export interface ProductShippingClassesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToShippingClassConnectionWhereArgs>;
}


/** Product object */
export interface ProductShortDescriptionArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** Product object */
export interface ProductUpsellArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductConnectionWhereArgs>;
}


/** Product object */
export interface ProductVisibleProductsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToVisibleProductConnectionWhereArgs>;
}

/** Arguments for filtering the ProductToProductAttributeConnection connection */
export interface ProductToProductAttributeConnectionWhereArgs {
  /** Filter results by attribute scope. */
  readonly type: Maybe<ProductAttributeTypesEnum>;
}

/** Product attribute type enumeration */
export enum ProductAttributeTypesEnum {
  /** A global product attribute */
  Global = 'GLOBAL',
  /** A local product attribute */
  Local = 'LOCAL'
}

/** Connection between the Product type and the ProductAttribute type */
export interface ProductToProductAttributeConnection {
  readonly __typename: 'ProductToProductAttributeConnection';
  /**
   * Edges for the ProductToProductAttributeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductToProductAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ProductAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToProductAttributeConnectionEdge {
  readonly __typename: 'ProductToProductAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ProductAttribute>;
}

/** Product attribute object */
export interface ProductAttribute {
  /** Attribute ID */
  readonly attributeId: Scalars['Int'];
  /** Attribute Global ID */
  readonly id: Scalars['ID'];
  /** Attribute label */
  readonly label: Scalars['String'];
  /** Attribute name */
  readonly name: Scalars['String'];
  /** Attribute options */
  readonly options: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Attribute position */
  readonly position: Scalars['Int'];
  /** Product attribute scope. */
  readonly scope: ProductAttributeTypesEnum;
  /** Is attribute on product variation */
  readonly variation: Scalars['Boolean'];
  /** Is attribute visible */
  readonly visible: Scalars['Boolean'];
}

/** Connection between the Product type and the ContentType type */
export interface ProductToContentTypeConnectionEdge {
  readonly __typename: 'ProductToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<ContentType>;
}

/** Arguments for filtering the ProductToMediaItemConnection connection */
export interface ProductToMediaItemConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the Product type and the MediaItem type */
export interface ProductToMediaItemConnection {
  readonly __typename: 'ProductToMediaItemConnection';
  /**
   * Edges for the ProductToMediaItemConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductToMediaItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<MediaItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToMediaItemConnectionEdge {
  readonly __typename: 'ProductToMediaItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<MediaItem>;
}

/** Arguments for filtering the ProductToGlobalProductAttributeConnection connection */
export interface ProductToGlobalProductAttributeConnectionWhereArgs {
  /** Filter results by attribute scope. */
  readonly type: Maybe<ProductAttributeTypesEnum>;
}

/** Connection between the Product type and the GlobalProductAttribute type */
export interface ProductToGlobalProductAttributeConnection {
  readonly __typename: 'ProductToGlobalProductAttributeConnection';
  /**
   * Edges for the ProductToGlobalProductAttributeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductToGlobalProductAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GlobalProductAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToGlobalProductAttributeConnectionEdge {
  readonly __typename: 'ProductToGlobalProductAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<GlobalProductAttribute>;
}

/** A product attribute object */
export interface GlobalProductAttribute extends ProductAttribute {
  readonly __typename: 'GlobalProductAttribute';
  /**
   * Attribute ID
   * @deprecated
   */
  readonly attributeId: Scalars['Int'];
  /**
   * Attribute Global ID
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Attribute label
   * @deprecated
   */
  readonly label: Scalars['String'];
  /**
   * Product attribute name
   * @deprecated
   */
  readonly name: Scalars['String'];
  /**
   * Attribute options
   * @deprecated
   */
  readonly options: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * Attribute position
   * @deprecated
   */
  readonly position: Scalars['Int'];
  /**
   * Product attribute scope.
   * @deprecated
   */
  readonly scope: ProductAttributeTypesEnum;
  /**
   * Product attribute slug
   * @deprecated
   */
  readonly slug: Scalars['String'];
  /**
   * Connection between the GlobalProductAttribute type and the TermNode type
   * @deprecated
   */
  readonly terms: Maybe<GlobalProductAttributeToTermNodeConnection>;
  /**
   * Is attribute on product variation
   * @deprecated
   */
  readonly variation: Scalars['Boolean'];
  /**
   * Is attribute visible
   * @deprecated
   */
  readonly visible: Scalars['Boolean'];
}


/** A product attribute object */
export interface GlobalProductAttributeTermsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<GlobalProductAttributeToTermNodeConnectionWhereArgs>;
}

/** Arguments for filtering the GlobalProductAttributeToTermNodeConnection connection */
export interface GlobalProductAttributeToTermNodeConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the GlobalProductAttribute type and the TermNode type */
export interface GlobalProductAttributeToTermNodeConnection {
  readonly __typename: 'GlobalProductAttributeToTermNodeConnection';
  /**
   * Edges for the GlobalProductAttributeToTermNodeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<GlobalProductAttributeToTermNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<TermNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface GlobalProductAttributeToTermNodeConnectionEdge {
  readonly __typename: 'GlobalProductAttributeToTermNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<TermNode>;
}

/** Arguments for filtering the ProductToLocalProductAttributeConnection connection */
export interface ProductToLocalProductAttributeConnectionWhereArgs {
  /** Filter results by attribute scope. */
  readonly type: Maybe<ProductAttributeTypesEnum>;
}

/** Connection between the Product type and the LocalProductAttribute type */
export interface ProductToLocalProductAttributeConnection {
  readonly __typename: 'ProductToLocalProductAttributeConnection';
  /**
   * Edges for the ProductToLocalProductAttributeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductToLocalProductAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<LocalProductAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToLocalProductAttributeConnectionEdge {
  readonly __typename: 'ProductToLocalProductAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<LocalProductAttribute>;
}

/** A product attribute object */
export interface LocalProductAttribute extends ProductAttribute {
  readonly __typename: 'LocalProductAttribute';
  /**
   * Attribute ID
   * @deprecated
   */
  readonly attributeId: Scalars['Int'];
  /**
   * Attribute Global ID
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Attribute label
   * @deprecated
   */
  readonly label: Scalars['String'];
  /**
   * Attribute name
   * @deprecated
   */
  readonly name: Scalars['String'];
  /**
   * Attribute options
   * @deprecated
   */
  readonly options: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * Attribute position
   * @deprecated
   */
  readonly position: Scalars['Int'];
  /**
   * Product attribute scope.
   * @deprecated
   */
  readonly scope: ProductAttributeTypesEnum;
  /**
   * Is attribute on product variation
   * @deprecated
   */
  readonly variation: Scalars['Boolean'];
  /**
   * Is attribute visible
   * @deprecated
   */
  readonly visible: Scalars['Boolean'];
}

/** Arguments for filtering the ProductToProductCategoryConnection connection */
export interface ProductToProductCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the Product type and the productCategory type */
export interface ProductToProductCategoryConnection {
  readonly __typename: 'ProductToProductCategoryConnection';
  /**
   * Edges for the ProductToProductCategoryConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductToProductCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ProductCategory>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToProductCategoryConnectionEdge {
  readonly __typename: 'ProductToProductCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ProductCategory>;
}

/** Arguments for filtering the ProductToProductTagConnection connection */
export interface ProductToProductTagConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the Product type and the productTag type */
export interface ProductToProductTagConnection {
  readonly __typename: 'ProductToProductTagConnection';
  /**
   * Edges for the ProductToProductTagConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductToProductTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ProductTag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToProductTagConnectionEdge {
  readonly __typename: 'ProductToProductTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ProductTag>;
}

/** The productTag type */
export interface ProductTag extends Node, TermNode, DatabaseIdentifier, UniformResourceIdentifiable, MenuItemLinkable {
  readonly __typename: 'ProductTag';
  /**
   * Connection between the productTag type and the ContentNode type
   * @deprecated
   */
  readonly contentNodes: Maybe<ProductTagToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated
   */
  readonly count: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly productTagId: Maybe<Scalars['Int']>;
  /**
   * Connection between the ProductTag type and the Product type
   * @deprecated
   */
  readonly products: Maybe<ProductTagToProductConnection>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * Connection between the productTag type and the Taxonomy type
   * @deprecated
   */
  readonly taxonomy: Maybe<ProductTagToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated
   */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated
   */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated
   */
  readonly uri: Scalars['String'];
}


/** The productTag type */
export interface ProductTagContentNodesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductTagToContentNodeConnectionWhereArgs>;
}


/** The productTag type */
export interface ProductTagEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The productTag type */
export interface ProductTagEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The productTag type */
export interface ProductTagProductsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductTagToProductConnectionWhereArgs>;
}

/** Arguments for filtering the ProductTagToContentNodeConnection connection */
export interface ProductTagToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the productTag type and the ContentNode type */
export interface ProductTagToContentNodeConnection {
  readonly __typename: 'ProductTagToContentNodeConnection';
  /**
   * Edges for the ProductTagToContentNodeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductTagToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductTagToContentNodeConnectionEdge {
  readonly __typename: 'ProductTagToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** Arguments for filtering the ProductTagToProductConnection connection */
export interface ProductTagToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  readonly attribute: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  readonly attributeTerm: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly category: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  readonly categoryIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  readonly categoryIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  readonly featured: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  readonly maxPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  readonly minPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  readonly search: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  readonly shippingClassId: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  readonly sku: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  readonly slug: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  readonly status: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  readonly stockStatus: Maybe<ReadonlyArray<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  readonly supportedTypesOnly: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  readonly tag: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  readonly tagId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  readonly tagIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  readonly tagIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  readonly taxonomyFilter: Maybe<ReadonlyArray<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  readonly type: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  readonly typeIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  readonly typeNotIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  readonly visibility: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the ProductTag type and the Product type */
export interface ProductTagToProductConnection {
  readonly __typename: 'ProductTagToProductConnection';
  /**
   * Edges for the ProductTagToProductConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductTagToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductTagToProductConnectionEdge {
  readonly __typename: 'ProductTagToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Product>;
}

/** Connection between the productTag type and the Taxonomy type */
export interface ProductTagToTaxonomyConnectionEdge {
  readonly __typename: 'ProductTagToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<Taxonomy>;
}

/** Arguments for filtering the ProductToProductTypeConnection connection */
export interface ProductToProductTypeConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the Product type and the productType type */
export interface ProductToProductTypeConnection {
  readonly __typename: 'ProductToProductTypeConnection';
  /**
   * Edges for the ProductToProductTypeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductToProductTypeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ProductType>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToProductTypeConnectionEdge {
  readonly __typename: 'ProductToProductTypeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ProductType>;
}

/** The productType type */
export interface ProductType extends Node, TermNode, DatabaseIdentifier {
  readonly __typename: 'ProductType';
  /**
   * Connection between the productType type and the ContentNode type
   * @deprecated
   */
  readonly contentNodes: Maybe<ProductTypeToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated
   */
  readonly count: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly productTypeId: Maybe<Scalars['Int']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * Connection between the productType type and the Taxonomy type
   * @deprecated
   */
  readonly taxonomy: Maybe<ProductTypeToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated
   */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated
   */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated
   */
  readonly uri: Scalars['String'];
}


/** The productType type */
export interface ProductTypeContentNodesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductTypeToContentNodeConnectionWhereArgs>;
}


/** The productType type */
export interface ProductTypeEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The productType type */
export interface ProductTypeEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}

/** Arguments for filtering the ProductTypeToContentNodeConnection connection */
export interface ProductTypeToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the productType type and the ContentNode type */
export interface ProductTypeToContentNodeConnection {
  readonly __typename: 'ProductTypeToContentNodeConnection';
  /**
   * Edges for the ProductTypeToContentNodeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductTypeToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductTypeToContentNodeConnectionEdge {
  readonly __typename: 'ProductTypeToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** Connection between the productType type and the Taxonomy type */
export interface ProductTypeToTaxonomyConnectionEdge {
  readonly __typename: 'ProductTypeToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<Taxonomy>;
}

/** Arguments for filtering the ProductToProductConnection connection */
export interface ProductToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  readonly attribute: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  readonly attributeTerm: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly category: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  readonly categoryIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  readonly categoryIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  readonly featured: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  readonly maxPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  readonly minPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  readonly search: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  readonly shippingClassId: Maybe<Scalars['Int']>;
  /** Shuffle results? (Pagination currently not support by this argument) */
  readonly shuffle: Maybe<Scalars['Boolean']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  readonly sku: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  readonly slug: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  readonly status: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  readonly stockStatus: Maybe<ReadonlyArray<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  readonly supportedTypesOnly: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  readonly tag: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  readonly tagId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  readonly tagIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  readonly tagIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  readonly taxonomyFilter: Maybe<ReadonlyArray<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  readonly type: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  readonly typeIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  readonly typeNotIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  readonly visibility: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the Product type and the Product type */
export interface ProductToProductConnection {
  readonly __typename: 'ProductToProductConnection';
  /**
   * Edges for the ProductToProductConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToProductConnectionEdge {
  readonly __typename: 'ProductToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Product>;
}

/** Arguments for filtering the ProductToCommentConnection connection */
export interface ProductToCommentConnectionWhereArgs {
  /** Comment author email address. */
  readonly authorEmail: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: Maybe<ReadonlyArray<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: Maybe<Scalars['ID']>;
}

/** Connection between the Product type and the Comment type */
export interface ProductToCommentConnection {
  readonly __typename: 'ProductToCommentConnection';
  /**
   * Average review rating for this product.
   * @deprecated
   */
  readonly averageRating: Maybe<Scalars['Float']>;
  /**
   * Edges for the ProductToCommentConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToCommentConnectionEdge {
  readonly __typename: 'ProductToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Comment>;
  /**
   * Review rating
   * @deprecated
   */
  readonly rating: Maybe<Scalars['Float']>;
}

/** Arguments for filtering the ProductToShippingClassConnection connection */
export interface ProductToShippingClassConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the Product type and the shippingClass type */
export interface ProductToShippingClassConnection {
  readonly __typename: 'ProductToShippingClassConnection';
  /**
   * Edges for the ProductToShippingClassConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductToShippingClassConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ShippingClass>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToShippingClassConnectionEdge {
  readonly __typename: 'ProductToShippingClassConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ShippingClass>;
}

/** The shippingClass type */
export interface ShippingClass extends Node, TermNode, DatabaseIdentifier, UniformResourceIdentifiable {
  readonly __typename: 'ShippingClass';
  /**
   * Connection between the shippingClass type and the ContentNode type
   * @deprecated
   */
  readonly contentNodes: Maybe<ShippingClassToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated
   */
  readonly count: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly shippingClassId: Maybe<Scalars['Int']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * Connection between the shippingClass type and the Taxonomy type
   * @deprecated
   */
  readonly taxonomy: Maybe<ShippingClassToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated
   */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated
   */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated
   */
  readonly uri: Scalars['String'];
}


/** The shippingClass type */
export interface ShippingClassContentNodesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ShippingClassToContentNodeConnectionWhereArgs>;
}


/** The shippingClass type */
export interface ShippingClassEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The shippingClass type */
export interface ShippingClassEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}

/** Arguments for filtering the ShippingClassToContentNodeConnection connection */
export interface ShippingClassToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the shippingClass type and the ContentNode type */
export interface ShippingClassToContentNodeConnection {
  readonly __typename: 'ShippingClassToContentNodeConnection';
  /**
   * Edges for the ShippingClassToContentNodeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ShippingClassToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ShippingClassToContentNodeConnectionEdge {
  readonly __typename: 'ShippingClassToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** Connection between the shippingClass type and the Taxonomy type */
export interface ShippingClassToTaxonomyConnectionEdge {
  readonly __typename: 'ShippingClassToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<Taxonomy>;
}

/** Arguments for filtering the ProductToVisibleProductConnection connection */
export interface ProductToVisibleProductConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the Product type and the visibleProduct type */
export interface ProductToVisibleProductConnection {
  readonly __typename: 'ProductToVisibleProductConnection';
  /**
   * Edges for the ProductToVisibleProductConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductToVisibleProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<VisibleProduct>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToVisibleProductConnectionEdge {
  readonly __typename: 'ProductToVisibleProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<VisibleProduct>;
}

/** The visibleProduct type */
export interface VisibleProduct extends Node, TermNode, DatabaseIdentifier {
  readonly __typename: 'VisibleProduct';
  /**
   * Connection between the visibleProduct type and the ContentNode type
   * @deprecated
   */
  readonly contentNodes: Maybe<VisibleProductToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated
   */
  readonly count: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * Connection between the visibleProduct type and the Taxonomy type
   * @deprecated
   */
  readonly taxonomy: Maybe<VisibleProductToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated
   */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated
   */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated
   */
  readonly uri: Scalars['String'];
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly visibleProductId: Maybe<Scalars['Int']>;
}


/** The visibleProduct type */
export interface VisibleProductContentNodesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<VisibleProductToContentNodeConnectionWhereArgs>;
}


/** The visibleProduct type */
export interface VisibleProductEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** The visibleProduct type */
export interface VisibleProductEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}

/** Arguments for filtering the VisibleProductToContentNodeConnection connection */
export interface VisibleProductToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the visibleProduct type and the ContentNode type */
export interface VisibleProductToContentNodeConnection {
  readonly __typename: 'VisibleProductToContentNodeConnection';
  /**
   * Edges for the VisibleProductToContentNodeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<VisibleProductToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface VisibleProductToContentNodeConnectionEdge {
  readonly __typename: 'VisibleProductToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** Connection between the visibleProduct type and the Taxonomy type */
export interface VisibleProductToTaxonomyConnectionEdge {
  readonly __typename: 'VisibleProductToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<Taxonomy>;
}

/** Connection between the productCategory type and the Taxonomy type */
export interface ProductCategoryToTaxonomyConnectionEdge {
  readonly __typename: 'ProductCategoryToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<Taxonomy>;
}

/** Arguments for filtering the CouponToProductConnection connection */
export interface CouponToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  readonly attribute: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  readonly attributeTerm: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly category: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  readonly categoryIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  readonly categoryIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  readonly featured: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  readonly maxPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  readonly minPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  readonly search: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  readonly shippingClassId: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  readonly sku: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  readonly slug: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  readonly status: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  readonly stockStatus: Maybe<ReadonlyArray<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  readonly supportedTypesOnly: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  readonly tag: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  readonly tagId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  readonly tagIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  readonly tagIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  readonly taxonomyFilter: Maybe<ReadonlyArray<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  readonly type: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  readonly typeIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  readonly typeNotIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  readonly visibility: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the Coupon type and the Product type */
export interface CouponToProductConnection {
  readonly __typename: 'CouponToProductConnection';
  /**
   * Edges for the CouponToProductConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<CouponToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CouponToProductConnectionEdge {
  readonly __typename: 'CouponToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Product>;
}

/** Extra data defined on the WC object */
export interface MetaData {
  readonly __typename: 'MetaData';
  /**
   * Meta ID.
   * @deprecated
   */
  readonly id: Scalars['String'];
  /**
   * Meta key.
   * @deprecated
   */
  readonly key: Scalars['String'];
  /**
   * Meta value.
   * @deprecated
   */
  readonly value: Maybe<Scalars['String']>;
}

/** Arguments for filtering the CouponToCustomerConnection connection */
export interface CouponToCustomerConnectionWhereArgs {
  /** Limit result set to resources with a specific email. */
  readonly email: Maybe<Scalars['String']>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Order of results. */
  readonly order: Maybe<OrderEnum>;
  /** Order results by a specific field. */
  readonly orderby: Maybe<CustomerConnectionOrderbyEnum>;
  /** Limit result set to resources with a specific role. */
  readonly role: Maybe<UserRoleEnum>;
  /** Limit result set to resources with a specific group of roles. */
  readonly roleIn: Maybe<ReadonlyArray<Maybe<UserRoleEnum>>>;
  /** Limit result set to resources not within a specific group of roles. */
  readonly roleNotIn: Maybe<ReadonlyArray<Maybe<UserRoleEnum>>>;
  /** Limit results to those matching a string. */
  readonly search: Maybe<Scalars['String']>;
}

/** Field to order the connection by */
export enum CustomerConnectionOrderbyEnum {
  /** Order by customer email */
  Email = 'EMAIL',
  /** Order by customer ID */
  Id = 'ID',
  /** Order by include field */
  Include = 'INCLUDE',
  /** Order by customer display name */
  Name = 'NAME',
  /** Order by customer registration date */
  RegisteredDate = 'REGISTERED_DATE',
  /** Order by customer username */
  Username = 'USERNAME'
}

/** Names of available user roles */
export enum UserRoleEnum {
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Customer = 'CUSTOMER',
  Editor = 'EDITOR',
  ShopManager = 'SHOP_MANAGER',
  Subscriber = 'SUBSCRIBER'
}

/** Connection between the Coupon type and the Customer type */
export interface CouponToCustomerConnection {
  readonly __typename: 'CouponToCustomerConnection';
  /**
   * Edges for the CouponToCustomerConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<CouponToCustomerConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Customer>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CouponToCustomerConnectionEdge {
  readonly __typename: 'CouponToCustomerConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Customer>;
}

/** A customer object */
export interface Customer extends Node {
  readonly __typename: 'Customer';
  /**
   * Return the date customer billing address properties
   * @deprecated
   */
  readonly billing: Maybe<CustomerAddress>;
  /**
   * Has customer calculated shipping?
   * @deprecated
   */
  readonly calculatedShipping: Maybe<Scalars['Boolean']>;
  /**
   * The ID of the customer in the database
   * @deprecated
   */
  readonly databaseId: Maybe<Scalars['Int']>;
  /**
   * Return the date customer was created
   * @deprecated
   */
  readonly date: Maybe<Scalars['String']>;
  /**
   * Return the customer&#039;s display name.
   * @deprecated
   */
  readonly displayName: Maybe<Scalars['String']>;
  /**
   * Connection between the Customer type and the DownloadableItem type
   * @deprecated
   */
  readonly downloadableItems: Maybe<CustomerToDownloadableItemConnection>;
  /**
   * Return the customer&#039;s email.
   * @deprecated
   */
  readonly email: Maybe<Scalars['String']>;
  /**
   * Return the customer&#039;s first name.
   * @deprecated
   */
  readonly firstName: Maybe<Scalars['String']>;
  /**
   * Has calculated shipping?
   * @deprecated
   */
  readonly hasCalculatedShipping: Maybe<Scalars['Boolean']>;
  /**
   * The globally unique identifier for the customer
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Return the date customer was last updated
   * @deprecated
   */
  readonly isPayingCustomer: Maybe<Scalars['Boolean']>;
  /**
   * Is customer VAT exempt?
   * @deprecated
   */
  readonly isVatExempt: Maybe<Scalars['Boolean']>;
  /**
   * Return the customer&#039;s last name.
   * @deprecated
   */
  readonly lastName: Maybe<Scalars['String']>;
  /**
   * Gets the customers last order.
   * @deprecated
   */
  readonly lastOrder: Maybe<Order>;
  /**
   * Object meta data
   * @deprecated
   */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * Return the date customer was last updated
   * @deprecated
   */
  readonly modified: Maybe<Scalars['String']>;
  /**
   * Return the number of orders this customer has.
   * @deprecated
   */
  readonly orderCount: Maybe<Scalars['Int']>;
  /**
   * Connection between the Customer type and the Order type
   * @deprecated
   */
  readonly orders: Maybe<CustomerToOrderConnection>;
  /**
   * Connection between the Customer type and the Refund type
   * @deprecated
   */
  readonly refunds: Maybe<CustomerToRefundConnection>;
  /**
   * Return the customer&#039;s user role.
   * @deprecated
   */
  readonly role: Maybe<Scalars['String']>;
  /**
   * A JWT token that can be used in future requests to for WooCommerce session identification
   * @deprecated
   */
  readonly sessionToken: Maybe<Scalars['String']>;
  /**
   * Return the date customer shipping address properties
   * @deprecated
   */
  readonly shipping: Maybe<CustomerAddress>;
  /**
   * Return how much money this customer has spent.
   * @deprecated
   */
  readonly totalSpent: Maybe<Scalars['Float']>;
  /**
   * Return the customer&#039;s username.
   * @deprecated
   */
  readonly username: Maybe<Scalars['String']>;
}


/** A customer object */
export interface CustomerDownloadableItemsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CustomerToDownloadableItemConnectionWhereArgs>;
}


/** A customer object */
export interface CustomerMetaDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  multiple: Maybe<Scalars['Boolean']>;
}


/** A customer object */
export interface CustomerOrdersArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CustomerToOrderConnectionWhereArgs>;
}


/** A customer object */
export interface CustomerRefundsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CustomerToRefundConnectionWhereArgs>;
}

/** A customer address object */
export interface CustomerAddress {
  readonly __typename: 'CustomerAddress';
  /**
   * Address 1
   * @deprecated
   */
  readonly address1: Maybe<Scalars['String']>;
  /**
   * Address 2
   * @deprecated
   */
  readonly address2: Maybe<Scalars['String']>;
  /**
   * City
   * @deprecated
   */
  readonly city: Maybe<Scalars['String']>;
  /**
   * Company
   * @deprecated
   */
  readonly company: Maybe<Scalars['String']>;
  /**
   * Country
   * @deprecated
   */
  readonly country: Maybe<CountriesEnum>;
  /**
   * E-mail
   * @deprecated
   */
  readonly email: Maybe<Scalars['String']>;
  /**
   * First name
   * @deprecated
   */
  readonly firstName: Maybe<Scalars['String']>;
  /**
   * Last name
   * @deprecated
   */
  readonly lastName: Maybe<Scalars['String']>;
  /**
   * Phone
   * @deprecated
   */
  readonly phone: Maybe<Scalars['String']>;
  /**
   * Zip Postal Code
   * @deprecated
   */
  readonly postcode: Maybe<Scalars['String']>;
  /**
   * State
   * @deprecated
   */
  readonly state: Maybe<Scalars['String']>;
}

/** Countries enumeration */
export enum CountriesEnum {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

/** Arguments for filtering the CustomerToDownloadableItemConnection connection */
export interface CustomerToDownloadableItemConnectionWhereArgs {
  /** Limit results to downloadable items that can be downloaded now. */
  readonly active: Maybe<Scalars['Boolean']>;
  /** Limit results to downloadable items that are expired. */
  readonly expired: Maybe<Scalars['Boolean']>;
  /** Limit results to downloadable items that have downloads remaining. */
  readonly hasDownloadsRemaining: Maybe<Scalars['Boolean']>;
}

/** Connection between the Customer type and the DownloadableItem type */
export interface CustomerToDownloadableItemConnection {
  readonly __typename: 'CustomerToDownloadableItemConnection';
  /**
   * Edges for the CustomerToDownloadableItemConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<CustomerToDownloadableItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<DownloadableItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CustomerToDownloadableItemConnectionEdge {
  readonly __typename: 'CustomerToDownloadableItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<DownloadableItem>;
}

/** A downloadable item */
export interface DownloadableItem {
  readonly __typename: 'DownloadableItem';
  /**
   * The date the downloadable item expires
   * @deprecated
   */
  readonly accessExpires: Maybe<Scalars['String']>;
  /**
   * ProductDownload of the downloadable item
   * @deprecated
   */
  readonly download: Maybe<ProductDownload>;
  /**
   * Downloadable item unique identifier
   * @deprecated
   */
  readonly downloadId: Scalars['String'];
  /**
   * Number of times the item can be downloaded.
   * @deprecated
   */
  readonly downloadsRemaining: Maybe<Scalars['Int']>;
  /**
   * Name of the downloadable item.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Product of downloadable item.
   * @deprecated
   */
  readonly product: Maybe<Product>;
  /**
   * Download URL of the downloadable item.
   * @deprecated
   */
  readonly url: Maybe<Scalars['String']>;
}

/** A product object */
export interface ProductDownload {
  readonly __typename: 'ProductDownload';
  /**
   * Is file allowed
   * @deprecated
   */
  readonly allowedFileType: Maybe<Scalars['Boolean']>;
  /**
   * Product download ID
   * @deprecated
   */
  readonly downloadId: Scalars['String'];
  /**
   * Download file
   * @deprecated
   */
  readonly file: Maybe<Scalars['String']>;
  /**
   * Validate file exists
   * @deprecated
   */
  readonly fileExists: Maybe<Scalars['Boolean']>;
  /**
   * File extension
   * @deprecated
   */
  readonly fileExt: Maybe<Scalars['String']>;
  /**
   * Type of file path set
   * @deprecated
   */
  readonly filePathType: Maybe<Scalars['String']>;
  /**
   * File type
   * @deprecated
   */
  readonly fileType: Maybe<Scalars['String']>;
  /**
   * Product download name
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
}

/** A order object */
export interface Order extends Node, NodeWithComments {
  readonly __typename: 'Order';
  /**
   * Order billing properties
   * @deprecated
   */
  readonly billing: Maybe<CustomerAddress>;
  /**
   * Cart hash
   * @deprecated
   */
  readonly cartHash: Maybe<Scalars['String']>;
  /**
   * Cart tax amount
   * @deprecated
   */
  readonly cartTax: Maybe<Scalars['String']>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated
   */
  readonly commentCount: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  readonly commentStatus: Maybe<Scalars['String']>;
  /**
   * Connection between the Order type and the ContentType type
   * @deprecated
   */
  readonly contentType: Maybe<OrderToContentTypeConnectionEdge>;
  /**
   * Connection between the Order type and the CouponLine type
   * @deprecated
   */
  readonly couponLines: Maybe<OrderToCouponLineConnection>;
  /**
   * How order was created
   * @deprecated
   */
  readonly createdVia: Maybe<Scalars['String']>;
  /**
   * Order currency
   * @deprecated
   */
  readonly currency: Maybe<Scalars['String']>;
  /**
   * Order customer
   * @deprecated
   */
  readonly customer: Maybe<Customer>;
  /**
   * Customer IP Address
   * @deprecated
   */
  readonly customerIpAddress: Maybe<Scalars['String']>;
  /**
   * Customer note
   * @deprecated
   */
  readonly customerNote: Maybe<Scalars['String']>;
  /**
   * Customer User Agent
   * @deprecated
   */
  readonly customerUserAgent: Maybe<Scalars['String']>;
  /**
   * The ID of the order in the database
   * @deprecated
   */
  readonly databaseId: Maybe<Scalars['Int']>;
  /**
   * Date order was created
   * @deprecated
   */
  readonly date: Maybe<Scalars['String']>;
  /**
   * Date order was completed
   * @deprecated
   */
  readonly dateCompleted: Maybe<Scalars['String']>;
  /**
   * Date order was paid
   * @deprecated
   */
  readonly datePaid: Maybe<Scalars['String']>;
  /**
   * Discount tax amount
   * @deprecated
   */
  readonly discountTax: Maybe<Scalars['String']>;
  /**
   * Discount total amount
   * @deprecated
   */
  readonly discountTotal: Maybe<Scalars['String']>;
  /**
   * Connection between the Order type and the DownloadableItem type
   * @deprecated
   */
  readonly downloadableItems: Maybe<OrderToDownloadableItemConnection>;
  /**
   * Connection between the Order type and the FeeLine type
   * @deprecated
   */
  readonly feeLines: Maybe<OrderToFeeLineConnection>;
  /**
   * Order has a billing address?
   * @deprecated
   */
  readonly hasBillingAddress: Maybe<Scalars['Boolean']>;
  /**
   * If order contains a downloadable product
   * @deprecated
   */
  readonly hasDownloadableItem: Maybe<Scalars['Boolean']>;
  /**
   * Order has a shipping address?
   * @deprecated
   */
  readonly hasShippingAddress: Maybe<Scalars['Boolean']>;
  /**
   * The globally unique identifier for the order
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Is product download is permitted
   * @deprecated
   */
  readonly isDownloadPermitted: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the Order type and the LineItem type
   * @deprecated
   */
  readonly lineItems: Maybe<OrderToLineItemConnection>;
  /**
   * Object meta data
   * @deprecated
   */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * Date order was last updated
   * @deprecated
   */
  readonly modified: Maybe<Scalars['String']>;
  /**
   * If order needs payment
   * @deprecated
   */
  readonly needsPayment: Maybe<Scalars['Boolean']>;
  /**
   * If order needs processing before it can be completed
   * @deprecated
   */
  readonly needsProcessing: Maybe<Scalars['Boolean']>;
  /**
   * If order needs shipping address
   * @deprecated
   */
  readonly needsShippingAddress: Maybe<Scalars['Boolean']>;
  /**
   * Order key
   * @deprecated
   */
  readonly orderKey: Maybe<Scalars['String']>;
  /**
   * Connection between the Order type and the Comment type
   * @deprecated
   */
  readonly orderNotes: Maybe<OrderToCommentConnection>;
  /**
   * Order number
   * @deprecated
   */
  readonly orderNumber: Maybe<Scalars['String']>;
  /**
   * Order version
   * @deprecated
   */
  readonly orderVersion: Maybe<Scalars['String']>;
  /**
   * Parent order
   * @deprecated
   */
  readonly parent: Maybe<Order>;
  /**
   * Payment method
   * @deprecated
   */
  readonly paymentMethod: Maybe<Scalars['String']>;
  /**
   * Payment method title
   * @deprecated
   */
  readonly paymentMethodTitle: Maybe<Scalars['String']>;
  /**
   * Prices include taxes?
   * @deprecated
   */
  readonly pricesIncludeTax: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the Order type and the Refund type
   * @deprecated
   */
  readonly refunds: Maybe<OrderToRefundConnection>;
  /**
   * Order shipping properties
   * @deprecated
   */
  readonly shipping: Maybe<CustomerAddress>;
  /**
   * Order customer
   * @deprecated
   */
  readonly shippingAddressMapUrl: Maybe<Scalars['String']>;
  /**
   * Connection between the Order type and the ShippingLine type
   * @deprecated
   */
  readonly shippingLines: Maybe<OrderToShippingLineConnection>;
  /**
   * Shipping tax amount
   * @deprecated
   */
  readonly shippingTax: Maybe<Scalars['String']>;
  /**
   * Shipping total amount
   * @deprecated
   */
  readonly shippingTotal: Maybe<Scalars['String']>;
  /**
   * Order status
   * @deprecated
   */
  readonly status: Maybe<OrderStatusEnum>;
  /**
   * Order subtotal
   * @deprecated
   */
  readonly subtotal: Maybe<Scalars['String']>;
  /**
   * Connection between the Order type and the TaxLine type
   * @deprecated
   */
  readonly taxLines: Maybe<OrderToTaxLineConnection>;
  /**
   * Order grand total
   * @deprecated
   */
  readonly total: Maybe<Scalars['String']>;
  /**
   * Order taxes
   * @deprecated
   */
  readonly totalTax: Maybe<Scalars['String']>;
  /**
   * Transaction ID
   * @deprecated
   */
  readonly transactionId: Maybe<Scalars['String']>;
}


/** A order object */
export interface OrderCartTaxArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A order object */
export interface OrderCouponLinesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A order object */
export interface OrderDiscountTaxArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A order object */
export interface OrderDiscountTotalArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A order object */
export interface OrderDownloadableItemsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<OrderToDownloadableItemConnectionWhereArgs>;
}


/** A order object */
export interface OrderFeeLinesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A order object */
export interface OrderLineItemsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A order object */
export interface OrderMetaDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  multiple: Maybe<Scalars['Boolean']>;
}


/** A order object */
export interface OrderOrderNotesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<OrderToCommentConnectionWhereArgs>;
}


/** A order object */
export interface OrderRefundsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<OrderToRefundConnectionWhereArgs>;
}


/** A order object */
export interface OrderShippingLinesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A order object */
export interface OrderShippingTaxArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A order object */
export interface OrderShippingTotalArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A order object */
export interface OrderSubtotalArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A order object */
export interface OrderTaxLinesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A order object */
export interface OrderTotalArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A order object */
export interface OrderTotalTaxArgs {
  format: Maybe<PricingFieldFormatEnum>;
}

/** Pricing field format enumeration */
export enum PricingFieldFormatEnum {
  Formatted = 'FORMATTED',
  Raw = 'RAW'
}

/** Connection between the Order type and the ContentType type */
export interface OrderToContentTypeConnectionEdge {
  readonly __typename: 'OrderToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<ContentType>;
}

/** Connection between the Order type and the CouponLine type */
export interface OrderToCouponLineConnection {
  readonly __typename: 'OrderToCouponLineConnection';
  /**
   * Edges for the OrderToCouponLineConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<OrderToCouponLineConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<CouponLine>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToCouponLineConnectionEdge {
  readonly __typename: 'OrderToCouponLineConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<CouponLine>;
}

/** a coupon line object */
export interface CouponLine {
  readonly __typename: 'CouponLine';
  /**
   * Line&#039;s Coupon code
   * @deprecated
   */
  readonly code: Maybe<Scalars['String']>;
  /**
   * Line&#039;s Coupon
   * @deprecated
   */
  readonly coupon: Maybe<Coupon>;
  /**
   * The ID of the order item in the database
   * @deprecated
   */
  readonly databaseId: Maybe<Scalars['Int']>;
  /**
   * Line&#039;s Discount total
   * @deprecated
   */
  readonly discount: Maybe<Scalars['String']>;
  /**
   * Line&#039;s Discount total tax
   * @deprecated
   */
  readonly discountTax: Maybe<Scalars['String']>;
  /**
   * Object meta data
   * @deprecated
   */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * The Id of the order the order item belongs to.
   * @deprecated
   */
  readonly orderId: Maybe<Scalars['Int']>;
}


/** a coupon line object */
export interface CouponLineMetaDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  multiple: Maybe<Scalars['Boolean']>;
}

/** Arguments for filtering the OrderToDownloadableItemConnection connection */
export interface OrderToDownloadableItemConnectionWhereArgs {
  /** Limit results to downloadable items that can be downloaded now. */
  readonly active: Maybe<Scalars['Boolean']>;
  /** Limit results to downloadable items that are expired. */
  readonly expired: Maybe<Scalars['Boolean']>;
  /** Limit results to downloadable items that have downloads remaining. */
  readonly hasDownloadsRemaining: Maybe<Scalars['Boolean']>;
}

/** Connection between the Order type and the DownloadableItem type */
export interface OrderToDownloadableItemConnection {
  readonly __typename: 'OrderToDownloadableItemConnection';
  /**
   * Edges for the OrderToDownloadableItemConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<OrderToDownloadableItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<DownloadableItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToDownloadableItemConnectionEdge {
  readonly __typename: 'OrderToDownloadableItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<DownloadableItem>;
}

/** Connection between the Order type and the FeeLine type */
export interface OrderToFeeLineConnection {
  readonly __typename: 'OrderToFeeLineConnection';
  /**
   * Edges for the OrderToFeeLineConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<OrderToFeeLineConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<FeeLine>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToFeeLineConnectionEdge {
  readonly __typename: 'OrderToFeeLineConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<FeeLine>;
}

/** a fee line object */
export interface FeeLine {
  readonly __typename: 'FeeLine';
  /**
   * Fee amount
   * @deprecated
   */
  readonly amount: Maybe<Scalars['String']>;
  /**
   * The ID of the order item in the database
   * @deprecated
   */
  readonly databaseId: Maybe<Scalars['Int']>;
  /**
   * Object meta data
   * @deprecated
   */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * Fee name
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * The Id of the order the order item belongs to.
   * @deprecated
   */
  readonly orderId: Maybe<Scalars['Int']>;
  /**
   * Line tax class
   * @deprecated
   */
  readonly taxClass: Maybe<TaxClassEnum>;
  /**
   * Tax status of fee
   * @deprecated
   */
  readonly taxStatus: Maybe<TaxStatusEnum>;
  /**
   * Line taxes
   * @deprecated
   */
  readonly taxes: Maybe<ReadonlyArray<Maybe<OrderItemTax>>>;
  /**
   * Line total (after discounts)
   * @deprecated
   */
  readonly total: Maybe<Scalars['String']>;
  /**
   * Line total tax (after discounts)
   * @deprecated
   */
  readonly totalTax: Maybe<Scalars['String']>;
}


/** a fee line object */
export interface FeeLineMetaDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  multiple: Maybe<Scalars['Boolean']>;
}

/** Tax class enumeration */
export enum TaxClassEnum {
  /** Inherits Tax class from cart */
  InheritCart = 'INHERIT_CART',
  ReducedRate = 'REDUCED_RATE',
  /** Standard Tax rate */
  Standard = 'STANDARD',
  ZeroRate = 'ZERO_RATE'
}

/** Product tax status enumeration */
export enum TaxStatusEnum {
  None = 'NONE',
  Shipping = 'SHIPPING',
  Taxable = 'TAXABLE'
}

/** Order item tax statement */
export interface OrderItemTax {
  readonly __typename: 'OrderItemTax';
  /**
   * Amount taxed
   * @deprecated
   */
  readonly amount: Maybe<Scalars['Float']>;
  /**
   * Subtotal
   * @deprecated
   */
  readonly subtotal: Maybe<Scalars['Float']>;
  /**
   * Tax line connected to this statement
   * @deprecated
   */
  readonly taxLine: Maybe<TaxLine>;
  /**
   * Order item ID for tax line connected to this statement
   * @deprecated
   */
  readonly taxLineId: Scalars['Int'];
  /**
   * Total
   * @deprecated
   */
  readonly total: Maybe<Scalars['Float']>;
}

/** a tax line object */
export interface TaxLine {
  readonly __typename: 'TaxLine';
  /**
   * The ID of the order item in the database
   * @deprecated
   */
  readonly databaseId: Maybe<Scalars['Int']>;
  /**
   * Is this a compound tax rate?
   * @deprecated
   */
  readonly isCompound: Maybe<Scalars['Boolean']>;
  /**
   * Tax rate label
   * @deprecated
   */
  readonly label: Maybe<Scalars['String']>;
  /**
   * Object meta data
   * @deprecated
   */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * The Id of the order the order item belongs to.
   * @deprecated
   */
  readonly orderId: Maybe<Scalars['Int']>;
  /**
   * Tax rate code/name
   * @deprecated
   */
  readonly rateCode: Maybe<Scalars['String']>;
  /**
   * Tax line&#039;s shipping tax total
   * @deprecated
   */
  readonly shippingTaxTotal: Maybe<Scalars['String']>;
  /**
   * Tax line&#039;s tax rate
   * @deprecated
   */
  readonly taxRate: Maybe<TaxRate>;
  /**
   * Tax total (not including shipping taxes)
   * @deprecated
   */
  readonly taxTotal: Maybe<Scalars['String']>;
}


/** a tax line object */
export interface TaxLineMetaDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  multiple: Maybe<Scalars['Boolean']>;
}

/** A Tax rate object */
export interface TaxRate extends Node {
  readonly __typename: 'TaxRate';
  /**
   * City name.
   * @deprecated
   */
  readonly city: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * Tax class. Default is standard.
   * @deprecated
   */
  readonly class: Maybe<TaxClassEnum>;
  /**
   * Whether or not this is a compound rate.
   * @deprecated
   */
  readonly compound: Maybe<Scalars['Boolean']>;
  /**
   * Country ISO 3166 code.
   * @deprecated
   */
  readonly country: Maybe<Scalars['String']>;
  /**
   * The ID of the customer in the database
   * @deprecated
   */
  readonly databaseId: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier for the tax rate.
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Tax rate name.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Indicates the order that will appear in queries.
   * @deprecated
   */
  readonly order: Maybe<Scalars['Int']>;
  /**
   * Postcode/ZIP.
   * @deprecated
   */
  readonly postcode: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * Tax priority.
   * @deprecated
   */
  readonly priority: Maybe<Scalars['Int']>;
  /**
   * Tax rate.
   * @deprecated
   */
  readonly rate: Maybe<Scalars['String']>;
  /**
   * Whether or not this tax rate also gets applied to shipping.
   * @deprecated
   */
  readonly shipping: Maybe<Scalars['Boolean']>;
  /**
   * State code.
   * @deprecated
   */
  readonly state: Maybe<Scalars['String']>;
}

/** Connection between the Order type and the LineItem type */
export interface OrderToLineItemConnection {
  readonly __typename: 'OrderToLineItemConnection';
  /**
   * Edges for the OrderToLineItemConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<OrderToLineItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<LineItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToLineItemConnectionEdge {
  readonly __typename: 'OrderToLineItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<LineItem>;
}

/** a line item object */
export interface LineItem {
  readonly __typename: 'LineItem';
  /**
   * The ID of the order item in the database
   * @deprecated
   */
  readonly databaseId: Maybe<Scalars['Int']>;
  /**
   * Line item&#039;s taxes
   * @deprecated
   */
  readonly itemDownloads: Maybe<ReadonlyArray<Maybe<ProductDownload>>>;
  /**
   * Object meta data
   * @deprecated
   */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * The Id of the order the order item belongs to.
   * @deprecated
   */
  readonly orderId: Maybe<Scalars['Int']>;
  /**
   * Line item&#039;s product object
   * @deprecated
   */
  readonly product: Maybe<Product>;
  /**
   * Line item&#039;s product ID
   * @deprecated
   */
  readonly productId: Maybe<Scalars['Int']>;
  /**
   * Line item&#039;s product quantity
   * @deprecated
   */
  readonly quantity: Maybe<Scalars['Int']>;
  /**
   * Line item&#039;s subtotal
   * @deprecated
   */
  readonly subtotal: Maybe<Scalars['String']>;
  /**
   * Line item&#039;s subtotal tax
   * @deprecated
   */
  readonly subtotalTax: Maybe<Scalars['String']>;
  /**
   * Line item&#039;s tax class
   * @deprecated
   */
  readonly taxClass: Maybe<TaxClassEnum>;
  /**
   * Line item&#039;s taxes
   * @deprecated
   */
  readonly taxStatus: Maybe<TaxStatusEnum>;
  /**
   * Line item&#039;s taxes
   * @deprecated
   */
  readonly taxes: Maybe<ReadonlyArray<Maybe<OrderItemTax>>>;
  /**
   * Line item&#039;s total
   * @deprecated
   */
  readonly total: Maybe<Scalars['String']>;
  /**
   * Line item&#039;s total tax
   * @deprecated
   */
  readonly totalTax: Maybe<Scalars['String']>;
  /**
   * Line item&#039;s product variation object
   * @deprecated
   */
  readonly variation: Maybe<ProductVariation>;
  /**
   * Line item&#039;s product variation ID
   * @deprecated
   */
  readonly variationId: Maybe<Scalars['Int']>;
}


/** a line item object */
export interface LineItemMetaDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  multiple: Maybe<Scalars['Boolean']>;
}

/** A product variation object */
export interface ProductVariation extends Node, NodeWithFeaturedImage, ContentNode, UniformResourceIdentifiable {
  readonly __typename: 'ProductVariation';
  /**
   * Connection between the ProductVariation type and the VariationAttribute type
   * @deprecated
   */
  readonly attributes: Maybe<ProductVariationToVariationAttributeConnection>;
  /**
   * Product variation backorders
   * @deprecated
   */
  readonly backorders: Maybe<BackordersEnum>;
  /**
   * Can product be backordered?
   * @deprecated
   */
  readonly backordersAllowed: Maybe<Scalars['Boolean']>;
  /**
   * Product variation catalog visibility
   * @deprecated
   */
  readonly catalogVisibility: Maybe<CatalogVisibilityEnum>;
  /**
   * Connection between the ProductVariation type and the ContentType type
   * @deprecated
   */
  readonly contentType: Maybe<ProductVariationToContentTypeConnectionEdge>;
  /**
   * The ID of the refund in the database
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * Date variation created
   * @deprecated
   */
  readonly date: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  readonly dateGmt: Maybe<Scalars['String']>;
  /**
   * Date on sale from
   * @deprecated
   */
  readonly dateOnSaleFrom: Maybe<Scalars['String']>;
  /**
   * Date on sale to
   * @deprecated
   */
  readonly dateOnSaleTo: Maybe<Scalars['String']>;
  /**
   * Product description
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated
   */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /**
   * Download expiry
   * @deprecated
   */
  readonly downloadExpiry: Maybe<Scalars['Int']>;
  /**
   * Download limit
   * @deprecated
   */
  readonly downloadLimit: Maybe<Scalars['Int']>;
  /**
   * Is downloadable?
   * @deprecated
   */
  readonly downloadable: Maybe<Scalars['Boolean']>;
  /**
   * Product downloads
   * @deprecated
   */
  readonly downloads: Maybe<ReadonlyArray<Maybe<ProductDownload>>>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  readonly editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  readonly enclosure: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated
   */
  readonly featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated
   */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated
   */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  readonly guid: Maybe<Scalars['String']>;
  /**
   * Does product variation have any visible attributes
   * @deprecated
   */
  readonly hasAttributes: Maybe<Scalars['Boolean']>;
  /**
   * Product variation height
   * @deprecated
   */
  readonly height: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the product variation
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Product variation main image
   * @deprecated
   */
  readonly image: Maybe<MediaItem>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated
   */
  readonly lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * Product variation length
   * @deprecated
   */
  readonly length: Maybe<Scalars['String']>;
  /**
   * The permalink of the post
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * if/how product variation stock is managed
   * @deprecated
   */
  readonly manageStock: Maybe<ManageStockEnum>;
  /**
   * Menu order
   * @deprecated
   */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /**
   * Object meta data
   * @deprecated
   */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * Date variation last updated
   * @deprecated
   */
  readonly modified: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /**
   * Product name
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Is variation on sale?
   * @deprecated
   */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /**
   * The parent of the node. The parent object can be of various types
   * @deprecated
   */
  readonly parent: Maybe<ProductVariationToVariableProductConnectionEdge>;
  /**
   * The database id of the preview node
   * @deprecated
   */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /**
   * Product variation&#039;s active price
   * @deprecated
   */
  readonly price: Maybe<Scalars['String']>;
  /**
   * If product variation can be bought
   * @deprecated
   */
  readonly purchasable: Maybe<Scalars['Boolean']>;
  /**
   * Product variation purchase_note
   * @deprecated
   */
  readonly purchaseNote: Maybe<Scalars['String']>;
  /**
   * Product variation&#039;s regular price
   * @deprecated
   */
  readonly regularPrice: Maybe<Scalars['String']>;
  /**
   * Product variation&#039;s sale price
   * @deprecated
   */
  readonly salePrice: Maybe<Scalars['String']>;
  /**
   * Product variation shipping class
   * @deprecated
   */
  readonly shippingClass: Maybe<Scalars['String']>;
  /**
   * Connection between the ProductVariation type and the shippingClass type
   * @deprecated
   */
  readonly shippingClasses: Maybe<ProductVariationToShippingClassConnection>;
  /**
   * Product variation SKU (Stock-keeping unit)
   * @deprecated
   */
  readonly sku: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * Variation status
   * @deprecated
   */
  readonly status: Maybe<Scalars['String']>;
  /**
   * Product variation stock quantity
   * @deprecated
   */
  readonly stockQuantity: Maybe<Scalars['Int']>;
  /**
   * Product stock status
   * @deprecated
   */
  readonly stockStatus: Maybe<StockStatusEnum>;
  /**
   * Product variation tax class
   * @deprecated
   */
  readonly taxClass: Maybe<TaxClassEnum>;
  /**
   * Tax status
   * @deprecated
   */
  readonly taxStatus: Maybe<TaxStatusEnum>;
  /**
   * Product type
   * @deprecated
   */
  readonly type: Maybe<ProductTypesEnum>;
  /**
   * URI path for the resource
   * @deprecated
   */
  readonly uri: Scalars['String'];
  /**
   * Is product virtual?
   * @deprecated
   */
  readonly virtual: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the ProductVariation type and the visibleProduct type
   * @deprecated
   */
  readonly visibleProducts: Maybe<ProductVariationToVisibleProductConnection>;
  /**
   * Product variation weight
   * @deprecated
   */
  readonly weight: Maybe<Scalars['String']>;
  /**
   * Product variation width
   * @deprecated
   */
  readonly width: Maybe<Scalars['String']>;
}


/** A product variation object */
export interface ProductVariationAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A product variation object */
export interface ProductVariationEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A product variation object */
export interface ProductVariationEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A product variation object */
export interface ProductVariationMetaDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  multiple: Maybe<Scalars['Boolean']>;
}


/** A product variation object */
export interface ProductVariationPriceArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A product variation object */
export interface ProductVariationRegularPriceArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A product variation object */
export interface ProductVariationSalePriceArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A product variation object */
export interface ProductVariationShippingClassesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductVariationToShippingClassConnectionWhereArgs>;
}


/** A product variation object */
export interface ProductVariationVisibleProductsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductVariationToVisibleProductConnectionWhereArgs>;
}

/** Connection between the ProductVariation type and the VariationAttribute type */
export interface ProductVariationToVariationAttributeConnection {
  readonly __typename: 'ProductVariationToVariationAttributeConnection';
  /**
   * Edges for the ProductVariationToVariationAttributeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductVariationToVariationAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<VariationAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductVariationToVariationAttributeConnectionEdge {
  readonly __typename: 'ProductVariationToVariationAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<VariationAttribute>;
}

/** A product variation attribute object */
export interface VariationAttribute {
  readonly __typename: 'VariationAttribute';
  /**
   * The Id of the order. Equivalent to WP_Post-&gt;ID
   * @deprecated
   */
  readonly attributeId: Maybe<Scalars['Int']>;
  /**
   * The Id of the order. Equivalent to WP_Post-&gt;ID
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Label of attribute
   * @deprecated
   */
  readonly label: Maybe<Scalars['String']>;
  /**
   * Name of attribute
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Selected value of attribute
   * @deprecated
   */
  readonly value: Maybe<Scalars['String']>;
}

/** Product backorder enumeration */
export enum BackordersEnum {
  No = 'NO',
  Notify = 'NOTIFY',
  Yes = 'YES'
}

/** Connection between the ProductVariation type and the ContentType type */
export interface ProductVariationToContentTypeConnectionEdge {
  readonly __typename: 'ProductVariationToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<ContentType>;
}

/** Product manage stock enumeration */
export enum ManageStockEnum {
  False = 'FALSE',
  Parent = 'PARENT',
  True = 'TRUE'
}

/** Connection between the ProductVariation type and the VariableProduct type */
export interface ProductVariationToVariableProductConnectionEdge {
  readonly __typename: 'ProductVariationToVariableProductConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<VariableProduct>;
}

/** A variable product object */
export interface VariableProduct extends Node, Product, NodeWithComments, NodeWithContentEditor, NodeWithFeaturedImage, ContentNode, UniformResourceIdentifiable {
  readonly __typename: 'VariableProduct';
  /**
   * Connection between the Product type and the ProductAttribute type
   * @deprecated
   */
  readonly attributes: Maybe<ProductToProductAttributeConnection>;
  /**
   * Product average count
   * @deprecated
   */
  readonly averageRating: Maybe<Scalars['Float']>;
  /**
   * Product backorders status
   * @deprecated
   */
  readonly backorders: Maybe<BackordersEnum>;
  /**
   * Can product be backordered?
   * @deprecated
   */
  readonly backordersAllowed: Maybe<Scalars['Boolean']>;
  /**
   * Catalog visibility
   * @deprecated
   */
  readonly catalogVisibility: Maybe<CatalogVisibilityEnum>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated
   */
  readonly commentCount: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  readonly commentStatus: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated
   */
  readonly content: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the ContentType type
   * @deprecated
   */
  readonly contentType: Maybe<ProductToContentTypeConnectionEdge>;
  /**
   * Connection between the VariableProduct type and the Product type
   * @deprecated
   */
  readonly crossSell: Maybe<VariableProductToProductConnection>;
  /**
   * The ID of the product in the database
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * Date product created
   * @deprecated
   */
  readonly date: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  readonly dateGmt: Maybe<Scalars['String']>;
  /**
   * Date on sale from
   * @deprecated
   */
  readonly dateOnSaleFrom: Maybe<Scalars['String']>;
  /**
   * Date on sale to
   * @deprecated
   */
  readonly dateOnSaleTo: Maybe<Scalars['String']>;
  /**
   * Connection between the VariableProduct type and the VariationAttribute type
   * @deprecated
   */
  readonly defaultAttributes: Maybe<VariableProductToVariationAttributeConnection>;
  /**
   * Product description
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated
   */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  readonly editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  readonly enclosure: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * If the product is featured
   * @deprecated
   */
  readonly featured: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated
   */
  readonly featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated
   */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated
   */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /**
   * Connection between the Product type and the MediaItem type
   * @deprecated
   */
  readonly galleryImages: Maybe<ProductToMediaItemConnection>;
  /**
   * Connection between the Product type and the GlobalProductAttribute type
   * @deprecated
   */
  readonly globalAttributes: Maybe<ProductToGlobalProductAttributeConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  readonly guid: Maybe<Scalars['String']>;
  /**
   * Product&#039;s height
   * @deprecated
   */
  readonly height: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the product
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Main image
   * @deprecated
   */
  readonly image: Maybe<MediaItem>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated
   */
  readonly lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * Product&#039;s length
   * @deprecated
   */
  readonly length: Maybe<Scalars['String']>;
  /**
   * The permalink of the post
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the LocalProductAttribute type
   * @deprecated
   */
  readonly localAttributes: Maybe<ProductToLocalProductAttributeConnection>;
  /**
   * If product manage stock
   * @deprecated
   */
  readonly manageStock: Maybe<Scalars['Boolean']>;
  /**
   * Menu order
   * @deprecated
   */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /**
   * Object meta data
   * @deprecated
   */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * Date product last updated
   * @deprecated
   */
  readonly modified: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /**
   * Product name
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Is product on sale?
   * @deprecated
   */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /**
   * Parent product
   * @deprecated
   */
  readonly parent: Maybe<Product>;
  /**
   * The database id of the preview node
   * @deprecated
   */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /**
   * Product&#039;s active price
   * @deprecated
   */
  readonly price: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the productCategory type
   * @deprecated
   */
  readonly productCategories: Maybe<ProductToProductCategoryConnection>;
  /**
   * Connection between the Product type and the productTag type
   * @deprecated
   */
  readonly productTags: Maybe<ProductToProductTagConnection>;
  /**
   * Connection between the Product type and the productType type
   * @deprecated
   */
  readonly productTypes: Maybe<ProductToProductTypeConnection>;
  /**
   * Can product be purchased?
   * @deprecated
   */
  readonly purchasable: Maybe<Scalars['Boolean']>;
  /**
   * Purchase note
   * @deprecated
   */
  readonly purchaseNote: Maybe<Scalars['String']>;
  /**
   * Product&#039;s regular price
   * @deprecated
   */
  readonly regularPrice: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated
   */
  readonly related: Maybe<ProductToProductConnection>;
  /**
   * Product review count
   * @deprecated
   */
  readonly reviewCount: Maybe<Scalars['Int']>;
  /**
   * Connection between the Product type and the Comment type
   * @deprecated
   */
  readonly reviews: Maybe<ProductToCommentConnection>;
  /**
   * If reviews are allowed
   * @deprecated
   */
  readonly reviewsAllowed: Maybe<Scalars['Boolean']>;
  /**
   * Product&#039;s sale price
   * @deprecated
   */
  readonly salePrice: Maybe<Scalars['String']>;
  /**
   * shipping class ID
   * @deprecated
   */
  readonly shippingClassId: Maybe<Scalars['Int']>;
  /**
   * Connection between the Product type and the shippingClass type
   * @deprecated
   */
  readonly shippingClasses: Maybe<ProductToShippingClassConnection>;
  /**
   * Does product need to be shipped?
   * @deprecated
   */
  readonly shippingRequired: Maybe<Scalars['Boolean']>;
  /**
   * Is product shipping taxable?
   * @deprecated
   */
  readonly shippingTaxable: Maybe<Scalars['Boolean']>;
  /**
   * Product short description
   * @deprecated
   */
  readonly shortDescription: Maybe<Scalars['String']>;
  /**
   * Product SKU
   * @deprecated
   */
  readonly sku: Maybe<Scalars['String']>;
  /**
   * Product slug
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * If should be sold individually
   * @deprecated
   */
  readonly soldIndividually: Maybe<Scalars['Boolean']>;
  /**
   * Product status
   * @deprecated
   */
  readonly status: Maybe<Scalars['String']>;
  /**
   * Number of items available for sale
   * @deprecated
   */
  readonly stockQuantity: Maybe<Scalars['Int']>;
  /**
   * Product stock status
   * @deprecated
   */
  readonly stockStatus: Maybe<StockStatusEnum>;
  /**
   * Tax class
   * @deprecated
   */
  readonly taxClass: Maybe<TaxClassEnum>;
  /**
   * Tax status
   * @deprecated
   */
  readonly taxStatus: Maybe<TaxStatusEnum>;
  /**
   * Number total of sales
   * @deprecated
   */
  readonly totalSales: Maybe<Scalars['Int']>;
  /**
   * Product type
   * @deprecated
   */
  readonly type: Maybe<ProductTypesEnum>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated
   */
  readonly upsell: Maybe<ProductToProductConnection>;
  /**
   * URI path for the resource
   * @deprecated
   */
  readonly uri: Scalars['String'];
  /**
   * Connection between the VariableProduct type and the ProductVariation type
   * @deprecated
   */
  readonly variations: Maybe<VariableProductToProductVariationConnection>;
  /**
   * Connection between the Product type and the visibleProduct type
   * @deprecated
   */
  readonly visibleProducts: Maybe<ProductToVisibleProductConnection>;
  /**
   * Product&#039;s weight
   * @deprecated
   */
  readonly weight: Maybe<Scalars['String']>;
  /**
   * Product&#039;s width
   * @deprecated
   */
  readonly width: Maybe<Scalars['String']>;
}


/** A variable product object */
export interface VariableProductAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductAttributeConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductContentArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** A variable product object */
export interface VariableProductCrossSellArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<VariableProductToProductConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductDefaultAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A variable product object */
export interface VariableProductDescriptionArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** A variable product object */
export interface VariableProductEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A variable product object */
export interface VariableProductEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A variable product object */
export interface VariableProductGalleryImagesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToMediaItemConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductGlobalAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductLocalAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductMetaDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  multiple: Maybe<Scalars['Boolean']>;
}


/** A variable product object */
export interface VariableProductPriceArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A variable product object */
export interface VariableProductProductCategoriesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductCategoryConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductProductTagsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductTagConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductProductTypesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductTypeConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductRegularPriceArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A variable product object */
export interface VariableProductRelatedArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductReviewsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToCommentConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductSalePriceArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A variable product object */
export interface VariableProductShippingClassesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToShippingClassConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductShortDescriptionArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** A variable product object */
export interface VariableProductUpsellArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductVariationsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<VariableProductToProductVariationConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductVisibleProductsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToVisibleProductConnectionWhereArgs>;
}

/** Arguments for filtering the VariableProductToProductConnection connection */
export interface VariableProductToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  readonly attribute: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  readonly attributeTerm: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly category: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  readonly categoryIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  readonly categoryIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  readonly featured: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  readonly maxPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  readonly minPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  readonly search: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  readonly shippingClassId: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  readonly sku: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  readonly slug: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  readonly status: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  readonly stockStatus: Maybe<ReadonlyArray<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  readonly supportedTypesOnly: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  readonly tag: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  readonly tagId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  readonly tagIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  readonly tagIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  readonly taxonomyFilter: Maybe<ReadonlyArray<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  readonly type: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  readonly typeIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  readonly typeNotIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  readonly visibility: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the VariableProduct type and the Product type */
export interface VariableProductToProductConnection {
  readonly __typename: 'VariableProductToProductConnection';
  /**
   * Edges for the VariableProductToProductConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<VariableProductToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface VariableProductToProductConnectionEdge {
  readonly __typename: 'VariableProductToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Product>;
}

/** Connection between the VariableProduct type and the VariationAttribute type */
export interface VariableProductToVariationAttributeConnection {
  readonly __typename: 'VariableProductToVariationAttributeConnection';
  /**
   * Edges for the VariableProductToVariationAttributeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<VariableProductToVariationAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<VariationAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface VariableProductToVariationAttributeConnectionEdge {
  readonly __typename: 'VariableProductToVariationAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<VariationAttribute>;
}

/** Arguments for filtering the VariableProductToProductVariationConnection connection */
export interface VariableProductToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  readonly attribute: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  readonly attributeTerm: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly category: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  readonly categoryIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  readonly categoryIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  readonly featured: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  readonly maxPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  readonly minPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  readonly search: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  readonly shippingClassId: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  readonly sku: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  readonly slug: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  readonly status: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  readonly stockStatus: Maybe<ReadonlyArray<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  readonly supportedTypesOnly: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  readonly tag: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  readonly tagId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  readonly tagIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  readonly tagIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  readonly taxonomyFilter: Maybe<ReadonlyArray<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  readonly type: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  readonly typeIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  readonly typeNotIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  readonly visibility: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the VariableProduct type and the ProductVariation type */
export interface VariableProductToProductVariationConnection {
  readonly __typename: 'VariableProductToProductVariationConnection';
  /**
   * Edges for the VariableProductToProductVariationConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<VariableProductToProductVariationConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ProductVariation>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface VariableProductToProductVariationConnectionEdge {
  readonly __typename: 'VariableProductToProductVariationConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ProductVariation>;
}

/** Arguments for filtering the ProductVariationToShippingClassConnection connection */
export interface ProductVariationToShippingClassConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the ProductVariation type and the shippingClass type */
export interface ProductVariationToShippingClassConnection {
  readonly __typename: 'ProductVariationToShippingClassConnection';
  /**
   * Edges for the ProductVariationToShippingClassConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductVariationToShippingClassConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ShippingClass>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductVariationToShippingClassConnectionEdge {
  readonly __typename: 'ProductVariationToShippingClassConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ShippingClass>;
}

/** Arguments for filtering the ProductVariationToVisibleProductConnection connection */
export interface ProductVariationToVisibleProductConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the ProductVariation type and the visibleProduct type */
export interface ProductVariationToVisibleProductConnection {
  readonly __typename: 'ProductVariationToVisibleProductConnection';
  /**
   * Edges for the ProductVariationToVisibleProductConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ProductVariationToVisibleProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<VisibleProduct>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductVariationToVisibleProductConnectionEdge {
  readonly __typename: 'ProductVariationToVisibleProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<VisibleProduct>;
}

/** Arguments for filtering the OrderToCommentConnection connection */
export interface OrderToCommentConnectionWhereArgs {
  /** Comment author email address. */
  readonly authorEmail: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: Maybe<ReadonlyArray<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: Maybe<Scalars['ID']>;
}

/** Connection between the Order type and the Comment type */
export interface OrderToCommentConnection {
  readonly __typename: 'OrderToCommentConnection';
  /**
   * Edges for the OrderToCommentConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<OrderToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToCommentConnectionEdge {
  readonly __typename: 'OrderToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * Is this a customer note?
   * @deprecated
   */
  readonly isCustomerNote: Maybe<Scalars['Boolean']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Comment>;
}

/** Arguments for filtering the OrderToRefundConnection connection */
export interface OrderToRefundConnectionWhereArgs {
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to refunds from a specific group of order IDs. */
  readonly orderIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostTypeOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  readonly search: Maybe<Scalars['String']>;
  /** Limit result set to refunds assigned a specific status. */
  readonly statuses: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

/** Connection between the Order type and the Refund type */
export interface OrderToRefundConnection {
  readonly __typename: 'OrderToRefundConnection';
  /**
   * Edges for the OrderToRefundConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<OrderToRefundConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Refund>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToRefundConnectionEdge {
  readonly __typename: 'OrderToRefundConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Refund>;
}

/** A refund object */
export interface Refund extends Node {
  readonly __typename: 'Refund';
  /**
   * Refunded amount
   * @deprecated
   */
  readonly amount: Maybe<Scalars['Float']>;
  /**
   * Connection between the Refund type and the ContentType type
   * @deprecated
   */
  readonly contentType: Maybe<RefundToContentTypeConnectionEdge>;
  /**
   * The ID of the refund in the database
   * @deprecated
   */
  readonly databaseId: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier for the refund
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Connection between the Refund type and the LineItem type
   * @deprecated
   */
  readonly lineItems: Maybe<RefundToLineItemConnection>;
  /**
   * Object meta data
   * @deprecated
   */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * Reason for refund
   * @deprecated
   */
  readonly reason: Maybe<Scalars['String']>;
  /**
   * User who completed the refund
   * @deprecated
   */
  readonly refundedBy: Maybe<User>;
  /**
   * A title for the new post type
   * @deprecated
   */
  readonly title: Maybe<Scalars['String']>;
}


/** A refund object */
export interface RefundLineItemsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A refund object */
export interface RefundMetaDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  multiple: Maybe<Scalars['Boolean']>;
}

/** Connection between the Refund type and the ContentType type */
export interface RefundToContentTypeConnectionEdge {
  readonly __typename: 'RefundToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<ContentType>;
}

/** Connection between the Refund type and the LineItem type */
export interface RefundToLineItemConnection {
  readonly __typename: 'RefundToLineItemConnection';
  /**
   * Edges for the RefundToLineItemConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RefundToLineItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<LineItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RefundToLineItemConnectionEdge {
  readonly __typename: 'RefundToLineItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<LineItem>;
}

/** Connection between the Order type and the ShippingLine type */
export interface OrderToShippingLineConnection {
  readonly __typename: 'OrderToShippingLineConnection';
  /**
   * Edges for the OrderToShippingLineConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<OrderToShippingLineConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ShippingLine>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToShippingLineConnectionEdge {
  readonly __typename: 'OrderToShippingLineConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ShippingLine>;
}

/** a shipping line object */
export interface ShippingLine {
  readonly __typename: 'ShippingLine';
  /**
   * The ID of the order item in the database
   * @deprecated
   */
  readonly databaseId: Maybe<Scalars['Int']>;
  /**
   * Object meta data
   * @deprecated
   */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * Shipping Line&#039;s shipping method name
   * @deprecated
   */
  readonly methodTitle: Maybe<Scalars['String']>;
  /**
   * The Id of the order the order item belongs to.
   * @deprecated
   */
  readonly orderId: Maybe<Scalars['Int']>;
  /**
   * Shipping Line&#039;s shipping method
   * @deprecated
   */
  readonly shippingMethod: Maybe<ShippingMethod>;
  /**
   * Line tax class
   * @deprecated
   */
  readonly taxClass: Maybe<TaxClassEnum>;
  /**
   * Line taxes
   * @deprecated
   */
  readonly taxes: Maybe<ReadonlyArray<Maybe<OrderItemTax>>>;
  /**
   * Line total (after discounts)
   * @deprecated
   */
  readonly total: Maybe<Scalars['String']>;
  /**
   * Line total tax (after discounts)
   * @deprecated
   */
  readonly totalTax: Maybe<Scalars['String']>;
}


/** a shipping line object */
export interface ShippingLineMetaDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  multiple: Maybe<Scalars['Boolean']>;
}

/** A shipping method object */
export interface ShippingMethod extends Node {
  readonly __typename: 'ShippingMethod';
  /**
   * The ID of the shipping method in the database
   * @deprecated
   */
  readonly databaseId: Scalars['ID'];
  /**
   * Shipping method description.
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the tax rate.
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Shipping method title.
   * @deprecated
   */
  readonly title: Maybe<Scalars['String']>;
}

/** Order status enumeration */
export enum OrderStatusEnum {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  OnHold = 'ON_HOLD',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED'
}

/** Connection between the Order type and the TaxLine type */
export interface OrderToTaxLineConnection {
  readonly __typename: 'OrderToTaxLineConnection';
  /**
   * Edges for the OrderToTaxLineConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<OrderToTaxLineConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<TaxLine>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToTaxLineConnectionEdge {
  readonly __typename: 'OrderToTaxLineConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<TaxLine>;
}

/** Arguments for filtering the CustomerToOrderConnection connection */
export interface CustomerToOrderConnectionWhereArgs {
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<OrdersOrderbyInput>>>;
  /** Limit result set to orders assigned a specific product. */
  readonly productId: Maybe<Scalars['Int']>;
  /** Limit results to those matching a string. */
  readonly search: Maybe<Scalars['String']>;
  /** Limit result set to orders assigned a specific status. */
  readonly statuses: Maybe<ReadonlyArray<Maybe<OrderStatusEnum>>>;
}

/** Options for ordering the connection */
export interface OrdersOrderbyInput {
  readonly field: OrdersOrderByEnum;
  readonly order: Maybe<OrderEnum>;
}

/** Fields to order the Orders connection by */
export enum OrdersOrderByEnum {
  /** Order by publish date */
  Date = 'DATE',
  /** Order by date the order was completed */
  DateCompleted = 'DATE_COMPLETED',
  /** Order by date the order was paid */
  DatePaid = 'DATE_PAID',
  /** Order by order discount amount */
  Discount = 'DISCOUNT',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by order key */
  OrderKey = 'ORDER_KEY',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by order total */
  Tax = 'TAX',
  /** Order by order total */
  Total = 'TOTAL'
}

/** Connection between the Customer type and the Order type */
export interface CustomerToOrderConnection {
  readonly __typename: 'CustomerToOrderConnection';
  /**
   * Edges for the CustomerToOrderConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<CustomerToOrderConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Order>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CustomerToOrderConnectionEdge {
  readonly __typename: 'CustomerToOrderConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Order>;
}

/** Arguments for filtering the CustomerToRefundConnection connection */
export interface CustomerToRefundConnectionWhereArgs {
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to refunds from a specific group of order IDs. */
  readonly orderIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostTypeOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  readonly search: Maybe<Scalars['String']>;
  /** Limit result set to refunds assigned a specific status. */
  readonly statuses: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

/** Connection between the Customer type and the Refund type */
export interface CustomerToRefundConnection {
  readonly __typename: 'CustomerToRefundConnection';
  /**
   * Edges for the CustomerToRefundConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<CustomerToRefundConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Refund>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CustomerToRefundConnectionEdge {
  readonly __typename: 'CustomerToRefundConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Refund>;
}

/** Shipping package object */
export interface ShippingPackage {
  readonly __typename: 'ShippingPackage';
  /**
   * Shipping package details
   * @deprecated
   */
  readonly packageDetails: Maybe<Scalars['String']>;
  /**
   * Shipping package rates
   * @deprecated
   */
  readonly rates: Maybe<ReadonlyArray<Maybe<ShippingRate>>>;
  /**
   * This shipping package supports the shipping calculator.
   * @deprecated
   */
  readonly supportsShippingCalculator: Maybe<Scalars['Boolean']>;
}

/** Shipping rate object */
export interface ShippingRate {
  readonly __typename: 'ShippingRate';
  /**
   * Shipping rate cost
   * @deprecated
   */
  readonly cost: Maybe<Scalars['String']>;
  /**
   * Shipping rate ID
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Shipping instance ID
   * @deprecated
   */
  readonly instanceId: Maybe<Scalars['Int']>;
  /**
   * Shipping rate label
   * @deprecated
   */
  readonly label: Maybe<Scalars['String']>;
  /**
   * Shipping method ID
   * @deprecated
   */
  readonly methodId: Scalars['ID'];
}

/** Arguments for filtering the CartToCartItemConnection connection */
export interface CartToCartItemConnectionWhereArgs {
  /** Limit results to cart items that require shipping */
  readonly needsShipping: Maybe<Scalars['Boolean']>;
}

/** Connection between the Cart type and the CartItem type */
export interface CartToCartItemConnection {
  readonly __typename: 'CartToCartItemConnection';
  /**
   * Edges for the CartToCartItemConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<CartToCartItemConnectionEdge>>>;
  /**
   * Total number of items in the cart.
   * @deprecated
   */
  readonly itemCount: Maybe<Scalars['Int']>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<CartItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
  /**
   * Total number of different products in the cart
   * @deprecated
   */
  readonly productCount: Maybe<Scalars['Int']>;
}

/** An edge in a connection */
export interface CartToCartItemConnectionEdge {
  readonly __typename: 'CartToCartItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<CartItem>;
}

/** A item in the cart */
export interface CartItem {
  readonly __typename: 'CartItem';
  /**
   * Object meta data
   * @deprecated
   */
  readonly extraData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * CartItem ID
   * @deprecated
   */
  readonly key: Scalars['ID'];
  /**
   * A product in the cart
   * @deprecated
   */
  readonly product: Maybe<Product>;
  /**
   * Quantity of the product
   * @deprecated
   */
  readonly quantity: Maybe<Scalars['Int']>;
  /**
   * Item&#039;s subtotal
   * @deprecated
   */
  readonly subtotal: Maybe<Scalars['String']>;
  /**
   * Item&#039;s subtotal tax
   * @deprecated
   */
  readonly subtotalTax: Maybe<Scalars['String']>;
  /**
   * Item&#039;s tax
   * @deprecated
   */
  readonly tax: Maybe<Scalars['String']>;
  /**
   * Item&#039;s total
   * @deprecated
   */
  readonly total: Maybe<Scalars['String']>;
  /**
   * Selected variation of the product
   * @deprecated
   */
  readonly variation: Maybe<ProductVariation>;
}


/** A item in the cart */
export interface CartItemExtraDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

/** An additional fee */
export interface CartFee {
  readonly __typename: 'CartFee';
  /**
   * Fee amount
   * @deprecated
   */
  readonly amount: Maybe<Scalars['Float']>;
  /**
   * Fee ID
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Fee name
   * @deprecated
   */
  readonly name: Scalars['String'];
  /**
   * Fee tax class
   * @deprecated
   */
  readonly taxClass: Maybe<TaxClassEnum>;
  /**
   * Is fee taxable?
   * @deprecated
   */
  readonly taxable: Maybe<Scalars['Boolean']>;
  /**
   * Fee total
   * @deprecated
   */
  readonly total: Maybe<Scalars['Float']>;
}

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export interface RootQueryToCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the category type */
export interface RootQueryToCategoryConnection {
  readonly __typename: 'RootQueryToCategoryConnection';
  /**
   * Edges for the RootQueryToCategoryConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToCategoryConnectionEdge {
  readonly __typename: 'RootQueryToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Category>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToCommentConnection connection */
export interface RootQueryToCommentConnectionWhereArgs {
  /** Comment author email address. */
  readonly authorEmail: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: Maybe<ReadonlyArray<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: Maybe<Scalars['ID']>;
}

/** Connection between the RootQuery type and the Comment type */
export interface RootQueryToCommentConnection {
  readonly __typename: 'RootQueryToCommentConnection';
  /**
   * Edges for the RootQueryToCommentConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToCommentConnectionEdge {
  readonly __typename: 'RootQueryToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Comment>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export interface RootQueryToContentNodeConnectionWhereArgs {
  /** The Types of content to filter */
  readonly contentTypes: Maybe<ReadonlyArray<Maybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the ContentNode type */
export interface RootQueryToContentNodeConnection {
  readonly __typename: 'RootQueryToContentNodeConnection';
  /**
   * Edges for the RootQueryToContentNodeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToContentNodeConnectionEdge {
  readonly __typename: 'RootQueryToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentNode>;
}

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum ContentTypeIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the content type. */
  Name = 'NAME'
}

/** Connection between the RootQuery type and the ContentType type */
export interface RootQueryToContentTypeConnection {
  readonly __typename: 'RootQueryToContentTypeConnection';
  /**
   * Edges for the RootQueryToContentTypeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToContentTypeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentType>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToContentTypeConnectionEdge {
  readonly __typename: 'RootQueryToContentTypeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentType>;
}

/** The Type of Identifier used to fetch a single Coupon. Default is ID. */
export enum CouponIdTypeEnum {
  /** Coupon code. */
  Code = 'CODE',
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Arguments for filtering the RootQueryToCouponConnection connection */
export interface RootQueryToCouponConnectionWhereArgs {
  /** Limit result set to resources with a specific code. */
  readonly code: Maybe<Scalars['String']>;
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostTypeOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  readonly search: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the Coupon type */
export interface RootQueryToCouponConnection {
  readonly __typename: 'RootQueryToCouponConnection';
  /**
   * Edges for the RootQueryToCouponConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToCouponConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Coupon>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToCouponConnectionEdge {
  readonly __typename: 'RootQueryToCouponConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Coupon>;
}

/** Arguments for filtering the RootQueryToCustomerConnection connection */
export interface RootQueryToCustomerConnectionWhereArgs {
  /** Limit result set to resources with a specific email. */
  readonly email: Maybe<Scalars['String']>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Order of results. */
  readonly order: Maybe<OrderEnum>;
  /** Order results by a specific field. */
  readonly orderby: Maybe<CustomerConnectionOrderbyEnum>;
  /** Limit result set to resources with a specific role. */
  readonly role: Maybe<UserRoleEnum>;
  /** Limit result set to resources with a specific group of roles. */
  readonly roleIn: Maybe<ReadonlyArray<Maybe<UserRoleEnum>>>;
  /** Limit result set to resources not within a specific group of roles. */
  readonly roleNotIn: Maybe<ReadonlyArray<Maybe<UserRoleEnum>>>;
  /** Limit results to those matching a string. */
  readonly search: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the Customer type */
export interface RootQueryToCustomerConnection {
  readonly __typename: 'RootQueryToCustomerConnection';
  /**
   * Edges for the RootQueryToCustomerConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToCustomerConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Customer>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToCustomerConnectionEdge {
  readonly __typename: 'RootQueryToCustomerConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Customer>;
}

/** The discussion setting type */
export interface DiscussionSettings {
  readonly __typename: 'DiscussionSettings';
  /**
   * Allow people to submit comments on new posts.
   * @deprecated
   */
  readonly defaultCommentStatus: Maybe<Scalars['String']>;
  /**
   * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
   * @deprecated
   */
  readonly defaultPingStatus: Maybe<Scalars['String']>;
}

/** The Type of Identifier used to fetch a single Product. Default is ID. */
export enum ProductIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Unique store identifier for product. */
  Sku = 'SKU',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG'
}

/** A external product object */
export interface ExternalProduct extends Node, Product, NodeWithComments, NodeWithContentEditor, NodeWithFeaturedImage, ContentNode, UniformResourceIdentifiable {
  readonly __typename: 'ExternalProduct';
  /**
   * Connection between the Product type and the ProductAttribute type
   * @deprecated
   */
  readonly attributes: Maybe<ProductToProductAttributeConnection>;
  /**
   * Product average count
   * @deprecated
   */
  readonly averageRating: Maybe<Scalars['Float']>;
  /**
   * External product Buy button text
   * @deprecated
   */
  readonly buttonText: Maybe<Scalars['String']>;
  /**
   * Catalog visibility
   * @deprecated
   */
  readonly catalogVisibility: Maybe<CatalogVisibilityEnum>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated
   */
  readonly commentCount: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  readonly commentStatus: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated
   */
  readonly content: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the ContentType type
   * @deprecated
   */
  readonly contentType: Maybe<ProductToContentTypeConnectionEdge>;
  /**
   * The ID of the product in the database
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * Date product created
   * @deprecated
   */
  readonly date: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  readonly dateGmt: Maybe<Scalars['String']>;
  /**
   * Date on sale from
   * @deprecated
   */
  readonly dateOnSaleFrom: Maybe<Scalars['String']>;
  /**
   * Date on sale to
   * @deprecated
   */
  readonly dateOnSaleTo: Maybe<Scalars['String']>;
  /**
   * Connection between the ExternalProduct type and the VariationAttribute type
   * @deprecated
   */
  readonly defaultAttributes: Maybe<ExternalProductToVariationAttributeConnection>;
  /**
   * Product description
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated
   */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  readonly editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  readonly enclosure: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * External product url
   * @deprecated
   */
  readonly externalUrl: Maybe<Scalars['String']>;
  /**
   * If the product is featured
   * @deprecated
   */
  readonly featured: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated
   */
  readonly featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated
   */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated
   */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /**
   * Connection between the Product type and the MediaItem type
   * @deprecated
   */
  readonly galleryImages: Maybe<ProductToMediaItemConnection>;
  /**
   * Connection between the Product type and the GlobalProductAttribute type
   * @deprecated
   */
  readonly globalAttributes: Maybe<ProductToGlobalProductAttributeConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  readonly guid: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the product
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Main image
   * @deprecated
   */
  readonly image: Maybe<MediaItem>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated
   */
  readonly lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the LocalProductAttribute type
   * @deprecated
   */
  readonly localAttributes: Maybe<ProductToLocalProductAttributeConnection>;
  /**
   * Menu order
   * @deprecated
   */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /**
   * Object meta data
   * @deprecated
   */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * Date product last updated
   * @deprecated
   */
  readonly modified: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /**
   * Product name
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Is product on sale?
   * @deprecated
   */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /**
   * Parent product
   * @deprecated
   */
  readonly parent: Maybe<Product>;
  /**
   * The database id of the preview node
   * @deprecated
   */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /**
   * Product&#039;s active price
   * @deprecated
   */
  readonly price: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the productCategory type
   * @deprecated
   */
  readonly productCategories: Maybe<ProductToProductCategoryConnection>;
  /**
   * Connection between the Product type and the productTag type
   * @deprecated
   */
  readonly productTags: Maybe<ProductToProductTagConnection>;
  /**
   * Connection between the Product type and the productType type
   * @deprecated
   */
  readonly productTypes: Maybe<ProductToProductTypeConnection>;
  /**
   * Can product be purchased?
   * @deprecated
   */
  readonly purchasable: Maybe<Scalars['Boolean']>;
  /**
   * Purchase note
   * @deprecated
   */
  readonly purchaseNote: Maybe<Scalars['String']>;
  /**
   * Product&#039;s regular price
   * @deprecated
   */
  readonly regularPrice: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated
   */
  readonly related: Maybe<ProductToProductConnection>;
  /**
   * Product review count
   * @deprecated
   */
  readonly reviewCount: Maybe<Scalars['Int']>;
  /**
   * Connection between the Product type and the Comment type
   * @deprecated
   */
  readonly reviews: Maybe<ProductToCommentConnection>;
  /**
   * If reviews are allowed
   * @deprecated
   */
  readonly reviewsAllowed: Maybe<Scalars['Boolean']>;
  /**
   * Product&#039;s sale price
   * @deprecated
   */
  readonly salePrice: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the shippingClass type
   * @deprecated
   */
  readonly shippingClasses: Maybe<ProductToShippingClassConnection>;
  /**
   * Product short description
   * @deprecated
   */
  readonly shortDescription: Maybe<Scalars['String']>;
  /**
   * Product SKU
   * @deprecated
   */
  readonly sku: Maybe<Scalars['String']>;
  /**
   * Product slug
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * Product status
   * @deprecated
   */
  readonly status: Maybe<Scalars['String']>;
  /**
   * Tax class
   * @deprecated
   */
  readonly taxClass: Maybe<TaxClassEnum>;
  /**
   * Tax status
   * @deprecated
   */
  readonly taxStatus: Maybe<TaxStatusEnum>;
  /**
   * Number total of sales
   * @deprecated
   */
  readonly totalSales: Maybe<Scalars['Int']>;
  /**
   * Product type
   * @deprecated
   */
  readonly type: Maybe<ProductTypesEnum>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated
   */
  readonly upsell: Maybe<ProductToProductConnection>;
  /**
   * URI path for the resource
   * @deprecated
   */
  readonly uri: Scalars['String'];
  /**
   * Connection between the Product type and the visibleProduct type
   * @deprecated
   */
  readonly visibleProducts: Maybe<ProductToVisibleProductConnection>;
}


/** A external product object */
export interface ExternalProductAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductAttributeConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductContentArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** A external product object */
export interface ExternalProductDefaultAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A external product object */
export interface ExternalProductDescriptionArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** A external product object */
export interface ExternalProductEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A external product object */
export interface ExternalProductEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A external product object */
export interface ExternalProductGalleryImagesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToMediaItemConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductGlobalAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductLocalAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductMetaDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  multiple: Maybe<Scalars['Boolean']>;
}


/** A external product object */
export interface ExternalProductPriceArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A external product object */
export interface ExternalProductProductCategoriesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductCategoryConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductProductTagsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductTagConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductProductTypesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductTypeConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductRegularPriceArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A external product object */
export interface ExternalProductRelatedArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductReviewsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToCommentConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductSalePriceArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A external product object */
export interface ExternalProductShippingClassesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToShippingClassConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductShortDescriptionArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** A external product object */
export interface ExternalProductUpsellArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductVisibleProductsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToVisibleProductConnectionWhereArgs>;
}

/** Connection between the ExternalProduct type and the VariationAttribute type */
export interface ExternalProductToVariationAttributeConnection {
  readonly __typename: 'ExternalProductToVariationAttributeConnection';
  /**
   * Edges for the ExternalProductToVariationAttributeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<ExternalProductToVariationAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<VariationAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ExternalProductToVariationAttributeConnectionEdge {
  readonly __typename: 'ExternalProductToVariationAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<VariationAttribute>;
}

/** The general setting type */
export interface GeneralSettings {
  readonly __typename: 'GeneralSettings';
  /**
   * A date format for all date strings.
   * @deprecated
   */
  readonly dateFormat: Maybe<Scalars['String']>;
  /**
   * Site tagline.
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * This address is used for admin purposes, like new user notification.
   * @deprecated
   */
  readonly email: Maybe<Scalars['String']>;
  /**
   * WordPress locale code.
   * @deprecated
   */
  readonly language: Maybe<Scalars['String']>;
  /**
   * A day number of the week that the week should start on.
   * @deprecated
   */
  readonly startOfWeek: Maybe<Scalars['Int']>;
  /**
   * A time format for all time strings.
   * @deprecated
   */
  readonly timeFormat: Maybe<Scalars['String']>;
  /**
   * A city in the same timezone as you.
   * @deprecated
   */
  readonly timezone: Maybe<Scalars['String']>;
  /**
   * Site title.
   * @deprecated
   */
  readonly title: Maybe<Scalars['String']>;
  /**
   * Site URL.
   * @deprecated
   */
  readonly url: Maybe<Scalars['String']>;
}

/** A group product object */
export interface GroupProduct extends Node, Product, NodeWithComments, NodeWithContentEditor, NodeWithFeaturedImage, ContentNode, UniformResourceIdentifiable {
  readonly __typename: 'GroupProduct';
  /**
   * Product&#039;s add to cart button text description
   * @deprecated
   */
  readonly addToCartDescription: Maybe<Scalars['String']>;
  /**
   * Product&#039;s add to cart button text description
   * @deprecated
   */
  readonly addToCartText: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the ProductAttribute type
   * @deprecated
   */
  readonly attributes: Maybe<ProductToProductAttributeConnection>;
  /**
   * Product average count
   * @deprecated
   */
  readonly averageRating: Maybe<Scalars['Float']>;
  /**
   * Catalog visibility
   * @deprecated
   */
  readonly catalogVisibility: Maybe<CatalogVisibilityEnum>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated
   */
  readonly commentCount: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  readonly commentStatus: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated
   */
  readonly content: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the ContentType type
   * @deprecated
   */
  readonly contentType: Maybe<ProductToContentTypeConnectionEdge>;
  /**
   * The ID of the product in the database
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * Date product created
   * @deprecated
   */
  readonly date: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  readonly dateGmt: Maybe<Scalars['String']>;
  /**
   * Date on sale from
   * @deprecated
   */
  readonly dateOnSaleFrom: Maybe<Scalars['String']>;
  /**
   * Date on sale to
   * @deprecated
   */
  readonly dateOnSaleTo: Maybe<Scalars['String']>;
  /**
   * Connection between the GroupProduct type and the VariationAttribute type
   * @deprecated
   */
  readonly defaultAttributes: Maybe<GroupProductToVariationAttributeConnection>;
  /**
   * Product description
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated
   */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  readonly editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  readonly enclosure: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * If the product is featured
   * @deprecated
   */
  readonly featured: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated
   */
  readonly featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated
   */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated
   */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /**
   * Connection between the Product type and the MediaItem type
   * @deprecated
   */
  readonly galleryImages: Maybe<ProductToMediaItemConnection>;
  /**
   * Connection between the Product type and the GlobalProductAttribute type
   * @deprecated
   */
  readonly globalAttributes: Maybe<ProductToGlobalProductAttributeConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  readonly guid: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the product
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Main image
   * @deprecated
   */
  readonly image: Maybe<MediaItem>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated
   */
  readonly lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the LocalProductAttribute type
   * @deprecated
   */
  readonly localAttributes: Maybe<ProductToLocalProductAttributeConnection>;
  /**
   * Menu order
   * @deprecated
   */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /**
   * Object meta data
   * @deprecated
   */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * Date product last updated
   * @deprecated
   */
  readonly modified: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /**
   * Product name
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Is product on sale?
   * @deprecated
   */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /**
   * Parent product
   * @deprecated
   */
  readonly parent: Maybe<Product>;
  /**
   * The database id of the preview node
   * @deprecated
   */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /**
   * Products&#039; price range
   * @deprecated
   */
  readonly price: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the productCategory type
   * @deprecated
   */
  readonly productCategories: Maybe<ProductToProductCategoryConnection>;
  /**
   * Connection between the Product type and the productTag type
   * @deprecated
   */
  readonly productTags: Maybe<ProductToProductTagConnection>;
  /**
   * Connection between the Product type and the productType type
   * @deprecated
   */
  readonly productTypes: Maybe<ProductToProductTypeConnection>;
  /**
   * Connection between the GroupProduct type and the Product type
   * @deprecated
   */
  readonly products: Maybe<GroupProductToProductConnection>;
  /**
   * Can product be purchased?
   * @deprecated
   */
  readonly purchasable: Maybe<Scalars['Boolean']>;
  /**
   * Purchase note
   * @deprecated
   */
  readonly purchaseNote: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated
   */
  readonly related: Maybe<ProductToProductConnection>;
  /**
   * Product review count
   * @deprecated
   */
  readonly reviewCount: Maybe<Scalars['Int']>;
  /**
   * Connection between the Product type and the Comment type
   * @deprecated
   */
  readonly reviews: Maybe<ProductToCommentConnection>;
  /**
   * If reviews are allowed
   * @deprecated
   */
  readonly reviewsAllowed: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the Product type and the shippingClass type
   * @deprecated
   */
  readonly shippingClasses: Maybe<ProductToShippingClassConnection>;
  /**
   * Product short description
   * @deprecated
   */
  readonly shortDescription: Maybe<Scalars['String']>;
  /**
   * Product SKU
   * @deprecated
   */
  readonly sku: Maybe<Scalars['String']>;
  /**
   * Product slug
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * Product status
   * @deprecated
   */
  readonly status: Maybe<Scalars['String']>;
  /**
   * Number total of sales
   * @deprecated
   */
  readonly totalSales: Maybe<Scalars['Int']>;
  /**
   * Product type
   * @deprecated
   */
  readonly type: Maybe<ProductTypesEnum>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated
   */
  readonly upsell: Maybe<ProductToProductConnection>;
  /**
   * URI path for the resource
   * @deprecated
   */
  readonly uri: Scalars['String'];
  /**
   * Connection between the Product type and the visibleProduct type
   * @deprecated
   */
  readonly visibleProducts: Maybe<ProductToVisibleProductConnection>;
}


/** A group product object */
export interface GroupProductAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductAttributeConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductContentArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** A group product object */
export interface GroupProductDefaultAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A group product object */
export interface GroupProductDescriptionArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** A group product object */
export interface GroupProductEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A group product object */
export interface GroupProductEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A group product object */
export interface GroupProductGalleryImagesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToMediaItemConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductGlobalAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductLocalAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductMetaDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  multiple: Maybe<Scalars['Boolean']>;
}


/** A group product object */
export interface GroupProductProductCategoriesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductCategoryConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductProductTagsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductTagConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductProductTypesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductTypeConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductProductsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<GroupProductToProductConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductRelatedArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductReviewsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToCommentConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductShippingClassesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToShippingClassConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductShortDescriptionArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** A group product object */
export interface GroupProductUpsellArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductVisibleProductsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToVisibleProductConnectionWhereArgs>;
}

/** Connection between the GroupProduct type and the VariationAttribute type */
export interface GroupProductToVariationAttributeConnection {
  readonly __typename: 'GroupProductToVariationAttributeConnection';
  /**
   * Edges for the GroupProductToVariationAttributeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<GroupProductToVariationAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<VariationAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface GroupProductToVariationAttributeConnectionEdge {
  readonly __typename: 'GroupProductToVariationAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<VariationAttribute>;
}

/** Arguments for filtering the GroupProductToProductConnection connection */
export interface GroupProductToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  readonly attribute: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  readonly attributeTerm: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly category: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  readonly categoryIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  readonly categoryIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  readonly featured: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  readonly maxPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  readonly minPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  readonly search: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  readonly shippingClassId: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  readonly sku: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  readonly slug: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  readonly status: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  readonly stockStatus: Maybe<ReadonlyArray<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  readonly supportedTypesOnly: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  readonly tag: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  readonly tagId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  readonly tagIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  readonly tagIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  readonly taxonomyFilter: Maybe<ReadonlyArray<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  readonly type: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  readonly typeIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  readonly typeNotIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  readonly visibility: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the GroupProduct type and the Product type */
export interface GroupProductToProductConnection {
  readonly __typename: 'GroupProductToProductConnection';
  /**
   * Edges for the GroupProductToProductConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<GroupProductToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface GroupProductToProductConnectionEdge {
  readonly __typename: 'GroupProductToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Product>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MediaItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a media item by its source url */
  SourceUrl = 'SOURCE_URL'
}

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export interface RootQueryToMediaItemConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the mediaItem type */
export interface RootQueryToMediaItemConnection {
  readonly __typename: 'RootQueryToMediaItemConnection';
  /**
   * Edges for the RootQueryToMediaItemConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToMediaItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<MediaItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToMediaItemConnectionEdge {
  readonly __typename: 'RootQueryToMediaItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<MediaItem>;
}

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuNodeIdTypeEnum {
  /** Identify a menu node by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a menu node by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a menu node by it's name */
  Name = 'NAME'
}

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export interface Menu extends Node, DatabaseIdentifier {
  readonly __typename: 'Menu';
  /**
   * The number of items in the menu
   * @deprecated
   */
  readonly count: Maybe<Scalars['Int']>;
  /**
   * The unique identifier stored in the database
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * The globally unique identifier of the nav menu object.
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  readonly locations: Maybe<ReadonlyArray<Maybe<MenuLocationEnum>>>;
  /**
   * WP ID of the nav menu.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly menuId: Maybe<Scalars['Int']>;
  /**
   * Connection between the Menu type and the MenuItem type
   * @deprecated
   */
  readonly menuItems: Maybe<MenuToMenuItemConnection>;
  /**
   * Display name of the menu. Equivalent to WP_Term-&gt;name.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * The url friendly name of the menu. Equivalent to WP_Term-&gt;slug
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
}


/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export interface MenuMenuItemsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<MenuToMenuItemConnectionWhereArgs>;
}

/** Registered menu locations */
export enum MenuLocationEnum {
  FooterNav = 'FOOTER_NAV',
  MainNav = 'MAIN_NAV'
}

/** Arguments for filtering the MenuToMenuItemConnection connection */
export interface MenuToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  readonly location: Maybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  readonly parentId: Maybe<Scalars['ID']>;
}

/** Connection between the Menu type and the MenuItem type */
export interface MenuToMenuItemConnection {
  readonly __typename: 'MenuToMenuItemConnection';
  /**
   * Edges for the MenuToMenuItemConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<MenuToMenuItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<MenuItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface MenuToMenuItemConnectionEdge {
  readonly __typename: 'MenuToMenuItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<MenuItem>;
}

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export interface MenuItem extends Node, DatabaseIdentifier {
  readonly __typename: 'MenuItem';
  /**
   * Connection between the MenuItem type and the MenuItem type
   * @deprecated
   */
  readonly childItems: Maybe<MenuItemToMenuItemConnection>;
  /**
   * Connection from MenuItem to it&#039;s connected node
   * @deprecated
   */
  readonly connectedNode: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
  /**
   * The object connected to this menu item.
   * @deprecated Deprecated in favor of the connectedNode field
   */
  readonly connectedObject: Maybe<MenuItemObjectUnion>;
  /**
   * Class attribute for the menu item link
   * @deprecated
   */
  readonly cssClasses: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * The unique identifier stored in the database
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * Description of the menu item.
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the nav menu item object.
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * Label or title of the menu item.
   * @deprecated
   */
  readonly label: Maybe<Scalars['String']>;
  /**
   * Link relationship (XFN) of the menu item.
   * @deprecated
   */
  readonly linkRelationship: Maybe<Scalars['String']>;
  /** @deprecated  */
  readonly locations: Maybe<ReadonlyArray<Maybe<MenuLocationEnum>>>;
  /**
   * The Menu a MenuItem is part of
   * @deprecated
   */
  readonly menu: Maybe<MenuItemToMenuConnectionEdge>;
  /**
   * WP ID of the menu item.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly menuItemId: Maybe<Scalars['Int']>;
  /**
   * Menu item order
   * @deprecated
   */
  readonly order: Maybe<Scalars['Int']>;
  /**
   * The database id of the parent menu item or null if it is the root
   * @deprecated
   */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent nav menu item object.
   * @deprecated
   */
  readonly parentId: Maybe<Scalars['ID']>;
  /**
   * Path for the resource. Relative path for internal resources. Absolute path for external resources.
   * @deprecated
   */
  readonly path: Scalars['String'];
  /**
   * Target attribute for the menu item link.
   * @deprecated
   */
  readonly target: Maybe<Scalars['String']>;
  /**
   * Title attribute for the menu item link
   * @deprecated
   */
  readonly title: Maybe<Scalars['String']>;
  /**
   * URL or destination of the menu item.
   * @deprecated
   */
  readonly url: Maybe<Scalars['String']>;
}


/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export interface MenuItemChildItemsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<MenuItemToMenuItemConnectionWhereArgs>;
}

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export interface MenuItemToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  readonly location: Maybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  readonly parentId: Maybe<Scalars['ID']>;
}

/** Connection between the MenuItem type and the MenuItem type */
export interface MenuItemToMenuItemConnection {
  readonly __typename: 'MenuItemToMenuItemConnection';
  /**
   * Edges for the MenuItemToMenuItemConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<MenuItemToMenuItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<MenuItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface MenuItemToMenuItemConnectionEdge {
  readonly __typename: 'MenuItemToMenuItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<MenuItem>;
}

/** Connection between the MenuItem type and the MenuItemLinkable type */
export interface MenuItemToMenuItemLinkableConnectionEdge {
  readonly __typename: 'MenuItemToMenuItemLinkableConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<MenuItemLinkable>;
}

/** Deprecated in favor of MenuItemLinkeable Interface */
export type MenuItemObjectUnion = Post | Page | Category | Tag | PostFormat | ProductCategory | ProductTag;

/** Connection between the MenuItem type and the Menu type */
export interface MenuItemToMenuConnectionEdge {
  readonly __typename: 'MenuItemToMenuConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly node: Maybe<Menu>;
}

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuItemNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export interface RootQueryToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  readonly location: Maybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  readonly parentId: Maybe<Scalars['ID']>;
}

/** Connection between the RootQuery type and the MenuItem type */
export interface RootQueryToMenuItemConnection {
  readonly __typename: 'RootQueryToMenuItemConnection';
  /**
   * Edges for the RootQueryToMenuItemConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToMenuItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<MenuItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToMenuItemConnectionEdge {
  readonly __typename: 'RootQueryToMenuItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<MenuItem>;
}

/** Arguments for filtering the RootQueryToMenuConnection connection */
export interface RootQueryToMenuConnectionWhereArgs {
  /** The ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  readonly location: Maybe<MenuLocationEnum>;
  /** The slug of the menu to query items for */
  readonly slug: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the Menu type */
export interface RootQueryToMenuConnection {
  readonly __typename: 'RootQueryToMenuConnection';
  /**
   * Edges for the RootQueryToMenuConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToMenuConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Menu>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToMenuConnectionEdge {
  readonly __typename: 'RootQueryToMenuConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Menu>;
}

/** The Type of Identifier used to fetch a single Order. Default is ID. */
export enum OrderIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Order number. */
  OrderNumber = 'ORDER_NUMBER'
}

/** Arguments for filtering the RootQueryToOrderConnection connection */
export interface RootQueryToOrderConnectionWhereArgs {
  /** Limit result set to orders assigned a specific customer. */
  readonly customerId: Maybe<Scalars['Int']>;
  /** Limit result set to orders assigned a specific group of customers. */
  readonly customersIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<OrdersOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to orders assigned a specific product. */
  readonly productId: Maybe<Scalars['Int']>;
  /** Limit results to those matching a string. */
  readonly search: Maybe<Scalars['String']>;
  /** Limit result set to orders assigned a specific status. */
  readonly statuses: Maybe<ReadonlyArray<Maybe<OrderStatusEnum>>>;
}

/** Connection between the RootQuery type and the Order type */
export interface RootQueryToOrderConnection {
  readonly __typename: 'RootQueryToOrderConnection';
  /**
   * Edges for the RootQueryToOrderConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToOrderConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Order>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToOrderConnectionEdge {
  readonly __typename: 'RootQueryToOrderConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Order>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToPageConnection connection */
export interface RootQueryToPageConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the page type */
export interface RootQueryToPageConnection {
  readonly __typename: 'RootQueryToPageConnection';
  /**
   * Edges for the RootQueryToPageConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToPageConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Page>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToPageConnectionEdge {
  readonly __typename: 'RootQueryToPageConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Page>;
}

/** Arguments for filtering the RootQueryToPaymentGatewayConnection connection */
export interface RootQueryToPaymentGatewayConnectionWhereArgs {
  /** Include disabled payment gateways? */
  readonly all: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the PaymentGateway type */
export interface RootQueryToPaymentGatewayConnection {
  readonly __typename: 'RootQueryToPaymentGatewayConnection';
  /**
   * Edges for the RootQueryToPaymentGatewayConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToPaymentGatewayConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<PaymentGateway>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToPaymentGatewayConnectionEdge {
  readonly __typename: 'RootQueryToPaymentGatewayConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<PaymentGateway>;
}

/** A payment gateway object */
export interface PaymentGateway {
  readonly __typename: 'PaymentGateway';
  /**
   * gateway&#039;s description
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * gateway&#039;s icon
   * @deprecated
   */
  readonly icon: Maybe<Scalars['String']>;
  /**
   * gateway&#039;s title
   * @deprecated
   */
  readonly id: Scalars['String'];
  /**
   * gateway&#039;s title
   * @deprecated
   */
  readonly title: Maybe<Scalars['String']>;
}

/** An plugin object */
export interface Plugin extends Node {
  readonly __typename: 'Plugin';
  /**
   * Name of the plugin author(s), may also be a company name.
   * @deprecated
   */
  readonly author: Maybe<Scalars['String']>;
  /**
   * URI for the related author(s)/company website.
   * @deprecated
   */
  readonly authorUri: Maybe<Scalars['String']>;
  /**
   * Description of the plugin.
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the plugin object.
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * Display name of the plugin.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Plugin path.
   * @deprecated
   */
  readonly path: Maybe<Scalars['String']>;
  /**
   * URI for the plugin website. This is useful for directing users for support requests etc.
   * @deprecated
   */
  readonly pluginUri: Maybe<Scalars['String']>;
  /**
   * Current version of the plugin.
   * @deprecated
   */
  readonly version: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the Plugin type */
export interface RootQueryToPluginConnection {
  readonly __typename: 'RootQueryToPluginConnection';
  /**
   * Edges for the RootQueryToPluginConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToPluginConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Plugin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToPluginConnectionEdge {
  readonly __typename: 'RootQueryToPluginConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Plugin>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostFormatIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export interface RootQueryToPostFormatConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the postFormat type */
export interface RootQueryToPostFormatConnection {
  readonly __typename: 'RootQueryToPostFormatConnection';
  /**
   * Edges for the RootQueryToPostFormatConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToPostFormatConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<PostFormat>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToPostFormatConnectionEdge {
  readonly __typename: 'RootQueryToPostFormatConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<PostFormat>;
}

/** Arguments for filtering the RootQueryToPostConnection connection */
export interface RootQueryToPostConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Category ID */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  readonly categoryName: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Tag Slug */
  readonly tag: Maybe<Scalars['String']>;
  /** Use Tag ID */
  readonly tagId: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  readonly tagSlugAnd: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  readonly tagSlugIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the post type */
export interface RootQueryToPostConnection {
  readonly __typename: 'RootQueryToPostConnection';
  /**
   * Edges for the RootQueryToPostConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToPostConnectionEdge {
  readonly __typename: 'RootQueryToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Post>;
}

/** Arguments for filtering the RootQueryToProductCategoryConnection connection */
export interface RootQueryToProductCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the productCategory type */
export interface RootQueryToProductCategoryConnection {
  readonly __typename: 'RootQueryToProductCategoryConnection';
  /**
   * Edges for the RootQueryToProductCategoryConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToProductCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ProductCategory>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToProductCategoryConnectionEdge {
  readonly __typename: 'RootQueryToProductCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ProductCategory>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ProductCategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ProductTagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToProductTagConnection connection */
export interface RootQueryToProductTagConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the productTag type */
export interface RootQueryToProductTagConnection {
  readonly __typename: 'RootQueryToProductTagConnection';
  /**
   * Edges for the RootQueryToProductTagConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToProductTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ProductTag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToProductTagConnectionEdge {
  readonly __typename: 'RootQueryToProductTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ProductTag>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ProductTypeIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToProductTypeConnection connection */
export interface RootQueryToProductTypeConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the productType type */
export interface RootQueryToProductTypeConnection {
  readonly __typename: 'RootQueryToProductTypeConnection';
  /**
   * Edges for the RootQueryToProductTypeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToProductTypeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ProductType>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToProductTypeConnectionEdge {
  readonly __typename: 'RootQueryToProductTypeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ProductType>;
}

/** The Type of Identifier used to fetch a single ProductVariation. Default is ID. */
export enum ProductVariationIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Arguments for filtering the RootQueryToProductConnection connection */
export interface RootQueryToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  readonly attribute: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  readonly attributeTerm: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly category: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  readonly categoryIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  readonly categoryIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  readonly featured: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  readonly maxPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  readonly minPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  readonly search: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  readonly shippingClassId: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  readonly sku: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  readonly slug: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  readonly status: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  readonly stockStatus: Maybe<ReadonlyArray<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  readonly supportedTypesOnly: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  readonly tag: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  readonly tagId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  readonly tagIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  readonly tagIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  readonly taxonomyFilter: Maybe<ReadonlyArray<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  readonly type: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  readonly typeIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  readonly typeNotIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  readonly visibility: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the RootQuery type and the Product type */
export interface RootQueryToProductConnection {
  readonly __typename: 'RootQueryToProductConnection';
  /**
   * Edges for the RootQueryToProductConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToProductConnectionEdge {
  readonly __typename: 'RootQueryToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Product>;
}

/** The reading setting type */
export interface ReadingSettings {
  readonly __typename: 'ReadingSettings';
  /**
   * Blog pages show at most.
   * @deprecated
   */
  readonly postsPerPage: Maybe<Scalars['Int']>;
}

/** The Type of Identifier used to fetch a single Refund. Default is ID. */
export enum RefundIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Arguments for filtering the RootQueryToRefundConnection connection */
export interface RootQueryToRefundConnectionWhereArgs {
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to refunds from a specific group of order IDs. */
  readonly orderIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostTypeOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  readonly search: Maybe<Scalars['String']>;
  /** Limit result set to refunds assigned a specific status. */
  readonly statuses: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

/** Connection between the RootQuery type and the Refund type */
export interface RootQueryToRefundConnection {
  readonly __typename: 'RootQueryToRefundConnection';
  /**
   * Edges for the RootQueryToRefundConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToRefundConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Refund>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToRefundConnectionEdge {
  readonly __typename: 'RootQueryToRefundConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Refund>;
}

/** Connection between the RootQuery type and the EnqueuedScript type */
export interface RootQueryToEnqueuedScriptConnection {
  readonly __typename: 'RootQueryToEnqueuedScriptConnection';
  /**
   * Edges for the RootQueryToEnqueuedScriptConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToEnqueuedScriptConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<EnqueuedScript>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToEnqueuedScriptConnectionEdge {
  readonly __typename: 'RootQueryToEnqueuedScriptConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<EnqueuedScript>;
}

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export interface RootQueryToEnqueuedStylesheetConnection {
  readonly __typename: 'RootQueryToEnqueuedStylesheetConnection';
  /**
   * Edges for the RootQueryToEnqueuedStylesheetConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToEnqueuedStylesheetConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<EnqueuedStylesheet>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToEnqueuedStylesheetConnectionEdge {
  readonly __typename: 'RootQueryToEnqueuedStylesheetConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<EnqueuedStylesheet>;
}

/** Arguments for filtering the RootQueryToContentRevisionUnionConnection connection */
export interface RootQueryToContentRevisionUnionConnectionWhereArgs {
  /** Filter the connection based on dates */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: Maybe<Scalars['String']>;
  readonly stati: Maybe<ReadonlyArray<Maybe<PostStatusEnum>>>;
  readonly status: Maybe<PostStatusEnum>;
  /** Title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the ContentRevisionUnion type */
export interface RootQueryToContentRevisionUnionConnection {
  readonly __typename: 'RootQueryToContentRevisionUnionConnection';
  /**
   * Edges for the RootQueryToContentRevisionUnionConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToContentRevisionUnionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ContentRevisionUnion>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToContentRevisionUnionConnectionEdge {
  readonly __typename: 'RootQueryToContentRevisionUnionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ContentRevisionUnion>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ShippingClassIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToShippingClassConnection connection */
export interface RootQueryToShippingClassConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the shippingClass type */
export interface RootQueryToShippingClassConnection {
  readonly __typename: 'RootQueryToShippingClassConnection';
  /**
   * Edges for the RootQueryToShippingClassConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToShippingClassConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ShippingClass>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToShippingClassConnectionEdge {
  readonly __typename: 'RootQueryToShippingClassConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ShippingClass>;
}

/** The Type of Identifier used to fetch a single Shipping Method. Default is ID. */
export enum ShippingMethodIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Connection between the RootQuery type and the ShippingMethod type */
export interface RootQueryToShippingMethodConnection {
  readonly __typename: 'RootQueryToShippingMethodConnection';
  /**
   * Edges for the RootQueryToShippingMethodConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToShippingMethodConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<ShippingMethod>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToShippingMethodConnectionEdge {
  readonly __typename: 'RootQueryToShippingMethodConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<ShippingMethod>;
}

/** A product object */
export interface SimpleProduct extends Node, Product, NodeWithComments, NodeWithContentEditor, NodeWithFeaturedImage, ContentNode, UniformResourceIdentifiable {
  readonly __typename: 'SimpleProduct';
  /**
   * Connection between the Product type and the ProductAttribute type
   * @deprecated
   */
  readonly attributes: Maybe<ProductToProductAttributeConnection>;
  /**
   * Product average count
   * @deprecated
   */
  readonly averageRating: Maybe<Scalars['Float']>;
  /**
   * Product backorders status
   * @deprecated
   */
  readonly backorders: Maybe<BackordersEnum>;
  /**
   * Can product be backordered?
   * @deprecated
   */
  readonly backordersAllowed: Maybe<Scalars['Boolean']>;
  /**
   * Catalog visibility
   * @deprecated
   */
  readonly catalogVisibility: Maybe<CatalogVisibilityEnum>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated
   */
  readonly commentCount: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  readonly commentStatus: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated
   */
  readonly content: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the ContentType type
   * @deprecated
   */
  readonly contentType: Maybe<ProductToContentTypeConnectionEdge>;
  /**
   * Connection between the SimpleProduct type and the Product type
   * @deprecated
   */
  readonly crossSell: Maybe<SimpleProductToProductConnection>;
  /**
   * The ID of the product in the database
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * Date product created
   * @deprecated
   */
  readonly date: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  readonly dateGmt: Maybe<Scalars['String']>;
  /**
   * Date on sale from
   * @deprecated
   */
  readonly dateOnSaleFrom: Maybe<Scalars['String']>;
  /**
   * Date on sale to
   * @deprecated
   */
  readonly dateOnSaleTo: Maybe<Scalars['String']>;
  /**
   * Connection between the SimpleProduct type and the VariationAttribute type
   * @deprecated
   */
  readonly defaultAttributes: Maybe<SimpleProductToVariationAttributeConnection>;
  /**
   * Product description
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated
   */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /**
   * Download expiry
   * @deprecated
   */
  readonly downloadExpiry: Maybe<Scalars['Int']>;
  /**
   * Download limit
   * @deprecated
   */
  readonly downloadLimit: Maybe<Scalars['Int']>;
  /**
   * Is downloadable?
   * @deprecated
   */
  readonly downloadable: Maybe<Scalars['Boolean']>;
  /**
   * Product downloads
   * @deprecated
   */
  readonly downloads: Maybe<ReadonlyArray<Maybe<ProductDownload>>>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  readonly editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  readonly enclosure: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated
   */
  readonly enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated
   */
  readonly enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * If the product is featured
   * @deprecated
   */
  readonly featured: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated
   */
  readonly featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated
   */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated
   */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /**
   * Connection between the Product type and the MediaItem type
   * @deprecated
   */
  readonly galleryImages: Maybe<ProductToMediaItemConnection>;
  /**
   * Connection between the Product type and the GlobalProductAttribute type
   * @deprecated
   */
  readonly globalAttributes: Maybe<ProductToGlobalProductAttributeConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  readonly guid: Maybe<Scalars['String']>;
  /**
   * Product&#039;s height
   * @deprecated
   */
  readonly height: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the product
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Main image
   * @deprecated
   */
  readonly image: Maybe<MediaItem>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated
   */
  readonly lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * Product&#039;s length
   * @deprecated
   */
  readonly length: Maybe<Scalars['String']>;
  /**
   * The permalink of the post
   * @deprecated
   */
  readonly link: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the LocalProductAttribute type
   * @deprecated
   */
  readonly localAttributes: Maybe<ProductToLocalProductAttributeConnection>;
  /**
   * If product manage stock
   * @deprecated
   */
  readonly manageStock: Maybe<Scalars['Boolean']>;
  /**
   * Menu order
   * @deprecated
   */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /**
   * Object meta data
   * @deprecated
   */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaData>>>;
  /**
   * Date product last updated
   * @deprecated
   */
  readonly modified: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /**
   * Product name
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * Is product on sale?
   * @deprecated
   */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /**
   * Parent product
   * @deprecated
   */
  readonly parent: Maybe<Product>;
  /**
   * The database id of the preview node
   * @deprecated
   */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated
   */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /**
   * Product&#039;s active price
   * @deprecated
   */
  readonly price: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the productCategory type
   * @deprecated
   */
  readonly productCategories: Maybe<ProductToProductCategoryConnection>;
  /**
   * Connection between the Product type and the productTag type
   * @deprecated
   */
  readonly productTags: Maybe<ProductToProductTagConnection>;
  /**
   * Connection between the Product type and the productType type
   * @deprecated
   */
  readonly productTypes: Maybe<ProductToProductTypeConnection>;
  /**
   * Can product be purchased?
   * @deprecated
   */
  readonly purchasable: Maybe<Scalars['Boolean']>;
  /**
   * Purchase note
   * @deprecated
   */
  readonly purchaseNote: Maybe<Scalars['String']>;
  /**
   * Product&#039;s regular price
   * @deprecated
   */
  readonly regularPrice: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated
   */
  readonly related: Maybe<ProductToProductConnection>;
  /**
   * Product review count
   * @deprecated
   */
  readonly reviewCount: Maybe<Scalars['Int']>;
  /**
   * Connection between the Product type and the Comment type
   * @deprecated
   */
  readonly reviews: Maybe<ProductToCommentConnection>;
  /**
   * If reviews are allowed
   * @deprecated
   */
  readonly reviewsAllowed: Maybe<Scalars['Boolean']>;
  /**
   * Product&#039;s sale price
   * @deprecated
   */
  readonly salePrice: Maybe<Scalars['String']>;
  /**
   * shipping class ID
   * @deprecated
   */
  readonly shippingClassId: Maybe<Scalars['Int']>;
  /**
   * Connection between the Product type and the shippingClass type
   * @deprecated
   */
  readonly shippingClasses: Maybe<ProductToShippingClassConnection>;
  /**
   * Does product need to be shipped?
   * @deprecated
   */
  readonly shippingRequired: Maybe<Scalars['Boolean']>;
  /**
   * Is product shipping taxable?
   * @deprecated
   */
  readonly shippingTaxable: Maybe<Scalars['Boolean']>;
  /**
   * Product short description
   * @deprecated
   */
  readonly shortDescription: Maybe<Scalars['String']>;
  /**
   * Product SKU
   * @deprecated
   */
  readonly sku: Maybe<Scalars['String']>;
  /**
   * Product slug
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * If should be sold individually
   * @deprecated
   */
  readonly soldIndividually: Maybe<Scalars['Boolean']>;
  /**
   * Product status
   * @deprecated
   */
  readonly status: Maybe<Scalars['String']>;
  /**
   * Number of items available for sale
   * @deprecated
   */
  readonly stockQuantity: Maybe<Scalars['Int']>;
  /**
   * Product stock status
   * @deprecated
   */
  readonly stockStatus: Maybe<StockStatusEnum>;
  /**
   * Tax class
   * @deprecated
   */
  readonly taxClass: Maybe<TaxClassEnum>;
  /**
   * Tax status
   * @deprecated
   */
  readonly taxStatus: Maybe<TaxStatusEnum>;
  /**
   * Number total of sales
   * @deprecated
   */
  readonly totalSales: Maybe<Scalars['Int']>;
  /**
   * Product type
   * @deprecated
   */
  readonly type: Maybe<ProductTypesEnum>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated
   */
  readonly upsell: Maybe<ProductToProductConnection>;
  /**
   * URI path for the resource
   * @deprecated
   */
  readonly uri: Scalars['String'];
  /**
   * Is product virtual?
   * @deprecated
   */
  readonly virtual: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the Product type and the visibleProduct type
   * @deprecated
   */
  readonly visibleProducts: Maybe<ProductToVisibleProductConnection>;
  /**
   * Product&#039;s weight
   * @deprecated
   */
  readonly weight: Maybe<Scalars['String']>;
  /**
   * Product&#039;s width
   * @deprecated
   */
  readonly width: Maybe<Scalars['String']>;
}


/** A product object */
export interface SimpleProductAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductAttributeConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductContentArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** A product object */
export interface SimpleProductCrossSellArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<SimpleProductToProductConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductDefaultAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A product object */
export interface SimpleProductDescriptionArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** A product object */
export interface SimpleProductEnqueuedScriptsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A product object */
export interface SimpleProductEnqueuedStylesheetsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
}


/** A product object */
export interface SimpleProductGalleryImagesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToMediaItemConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductGlobalAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductLocalAttributesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductMetaDataArgs {
  key: Maybe<Scalars['String']>;
  keysIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  multiple: Maybe<Scalars['Boolean']>;
}


/** A product object */
export interface SimpleProductPriceArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A product object */
export interface SimpleProductProductCategoriesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductCategoryConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductProductTagsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductTagConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductProductTypesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductTypeConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductRegularPriceArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A product object */
export interface SimpleProductRelatedArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductReviewsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToCommentConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductSalePriceArgs {
  format: Maybe<PricingFieldFormatEnum>;
}


/** A product object */
export interface SimpleProductShippingClassesArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToShippingClassConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductShortDescriptionArgs {
  format: Maybe<PostObjectFieldFormatEnum>;
}


/** A product object */
export interface SimpleProductUpsellArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToProductConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductVisibleProductsArgs {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ProductToVisibleProductConnectionWhereArgs>;
}

/** Arguments for filtering the SimpleProductToProductConnection connection */
export interface SimpleProductToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  readonly attribute: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  readonly attributeTerm: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly category: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  readonly categoryIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  readonly categoryIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  readonly categoryIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  readonly categoryNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  readonly dateQuery: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  readonly featured: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  readonly maxPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  readonly minPrice: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  readonly onSale: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  readonly parentIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  readonly parentNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  readonly search: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  readonly shippingClassId: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  readonly sku: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  readonly slug: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  readonly status: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  readonly stockStatus: Maybe<ReadonlyArray<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  readonly supportedTypesOnly: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  readonly tag: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  readonly tagId: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  readonly tagIdIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  readonly tagIdNotIn: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  readonly tagIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  readonly tagNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  readonly taxonomyFilter: Maybe<ReadonlyArray<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  readonly type: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  readonly typeIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  readonly typeNotIn: Maybe<ReadonlyArray<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  readonly visibility: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the SimpleProduct type and the Product type */
export interface SimpleProductToProductConnection {
  readonly __typename: 'SimpleProductToProductConnection';
  /**
   * Edges for the SimpleProductToProductConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<SimpleProductToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface SimpleProductToProductConnectionEdge {
  readonly __typename: 'SimpleProductToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Product>;
}

/** Connection between the SimpleProduct type and the VariationAttribute type */
export interface SimpleProductToVariationAttributeConnection {
  readonly __typename: 'SimpleProductToVariationAttributeConnection';
  /**
   * Edges for the SimpleProductToVariationAttributeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<SimpleProductToVariationAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<VariationAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface SimpleProductToVariationAttributeConnectionEdge {
  readonly __typename: 'SimpleProductToVariationAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<VariationAttribute>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToTagConnection connection */
export interface RootQueryToTagConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the tag type */
export interface RootQueryToTagConnection {
  readonly __typename: 'RootQueryToTagConnection';
  /**
   * Edges for the RootQueryToTagConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToTagConnectionEdge {
  readonly __typename: 'RootQueryToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Tag>;
}

/** The Type of Identifier used to fetch a single Tax rate. Default is ID. */
export enum TaxRateIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Arguments for filtering the RootQueryToTaxRateConnection connection */
export interface RootQueryToTaxRateConnectionWhereArgs {
  /** Sort by tax class. */
  readonly class: Maybe<TaxClassEnum>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<TaxRateConnectionOrderbyInput>>>;
  /** Filter results by a post code. */
  readonly postCode: Maybe<Scalars['String']>;
  /** Filter results by a group of post codes. */
  readonly postCodeIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

/** Options for ordering the connection */
export interface TaxRateConnectionOrderbyInput {
  readonly field: TaxRateConnectionOrderbyEnum;
  readonly order: Maybe<OrderEnum>;
}

/** Field to order the connection by */
export enum TaxRateConnectionOrderbyEnum {
  Id = 'ID',
  Order = 'ORDER'
}

/** Connection between the RootQuery type and the TaxRate type */
export interface RootQueryToTaxRateConnection {
  readonly __typename: 'RootQueryToTaxRateConnection';
  /**
   * Edges for the RootQueryToTaxRateConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToTaxRateConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<TaxRate>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToTaxRateConnectionEdge {
  readonly __typename: 'RootQueryToTaxRateConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<TaxRate>;
}

/** Connection between the RootQuery type and the Taxonomy type */
export interface RootQueryToTaxonomyConnection {
  readonly __typename: 'RootQueryToTaxonomyConnection';
  /**
   * Edges for the RootQueryToTaxonomyConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToTaxonomyConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Taxonomy>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToTaxonomyConnectionEdge {
  readonly __typename: 'RootQueryToTaxonomyConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Taxonomy>;
}

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum TaxonomyIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the taxonomy */
  Name = 'NAME'
}

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export interface RootQueryToTermNodeConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  readonly taxonomies: Maybe<ReadonlyArray<Maybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the TermNode type */
export interface RootQueryToTermNodeConnection {
  readonly __typename: 'RootQueryToTermNodeConnection';
  /**
   * Edges for the RootQueryToTermNodeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToTermNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<TermNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToTermNodeConnectionEdge {
  readonly __typename: 'RootQueryToTermNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<TermNode>;
}

/** A theme object */
export interface Theme extends Node {
  readonly __typename: 'Theme';
  /**
   * Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ).
   * @deprecated
   */
  readonly author: Maybe<Scalars['String']>;
  /**
   * URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ).
   * @deprecated
   */
  readonly authorUri: Maybe<Scalars['String']>;
  /**
   * The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ).
   * @deprecated
   */
  readonly description: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the theme object.
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ).
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot().
   * @deprecated
   */
  readonly screenshot: Maybe<Scalars['String']>;
  /**
   * The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet().
   * @deprecated
   */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ).
   * @deprecated
   */
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ).
   * @deprecated
   */
  readonly themeUri: Maybe<Scalars['String']>;
  /**
   * The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ).
   * @deprecated
   */
  readonly version: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the Theme type */
export interface RootQueryToThemeConnection {
  readonly __typename: 'RootQueryToThemeConnection';
  /**
   * Edges for the RootQueryToThemeConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToThemeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Theme>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToThemeConnectionEdge {
  readonly __typename: 'RootQueryToThemeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<Theme>;
}

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum UserNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The Email of the User */
  Email = 'EMAIL',
  /** The hashed Global ID */
  Id = 'ID',
  /** The slug of the User */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
  /** The username the User uses to login with */
  Username = 'USERNAME'
}

/** Connection between the RootQuery type and the UserRole type */
export interface RootQueryToUserRoleConnection {
  readonly __typename: 'RootQueryToUserRoleConnection';
  /**
   * Edges for the RootQueryToUserRoleConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToUserRoleConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<UserRole>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToUserRoleConnectionEdge {
  readonly __typename: 'RootQueryToUserRoleConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<UserRole>;
}

/** Arguments for filtering the RootQueryToUserConnection connection */
export interface RootQueryToUserConnectionWhereArgs {
  /** Array of userIds to exclude. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  readonly hasPublishedPosts: Maybe<ReadonlyArray<Maybe<ContentTypeEnum>>>;
  /** Array of userIds to include. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** The user login. */
  readonly login: Maybe<Scalars['String']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  readonly loginIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  readonly loginNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The user nicename. */
  readonly nicename: Maybe<Scalars['String']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  readonly nicenameIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  readonly nicenameNotIn: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: Maybe<ReadonlyArray<Maybe<UsersConnectionOrderbyInput>>>;
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  readonly role: Maybe<UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  readonly roleIn: Maybe<ReadonlyArray<Maybe<UserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  readonly roleNotIn: Maybe<ReadonlyArray<Maybe<UserRoleEnum>>>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  readonly searchColumns: Maybe<ReadonlyArray<Maybe<UsersConnectionSearchColumnEnum>>>;
}

/** Options for ordering the connection */
export interface UsersConnectionOrderbyInput {
  readonly field: UsersConnectionOrderbyEnum;
  readonly order: Maybe<OrderEnum>;
}

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email address */
  Email = 'EMAIL',
  /** Order by login */
  Login = 'LOGIN',
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = 'LOGIN_IN',
  /** Order by nice name */
  NiceName = 'NICE_NAME',
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = 'NICE_NAME_IN',
  /** Order by registration date */
  Registered = 'REGISTERED',
  /** Order by URL */
  Url = 'URL'
}

/** Names of available user roles */
export enum UsersConnectionSearchColumnEnum {
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Customer = 'CUSTOMER',
  Editor = 'EDITOR',
  ShopManager = 'SHOP_MANAGER',
  Subscriber = 'SUBSCRIBER'
}

/** Connection between the RootQuery type and the User type */
export interface RootQueryToUserConnection {
  readonly __typename: 'RootQueryToUserConnection';
  /**
   * Edges for the RootQueryToUserConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToUserConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<User>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToUserConnectionEdge {
  readonly __typename: 'RootQueryToUserConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<User>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum VisibleProductIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToVisibleProductConnection connection */
export interface RootQueryToVisibleProductConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the visibleProduct type */
export interface RootQueryToVisibleProductConnection {
  readonly __typename: 'RootQueryToVisibleProductConnection';
  /**
   * Edges for the RootQueryToVisibleProductConnection connection
   * @deprecated
   */
  readonly edges: Maybe<ReadonlyArray<Maybe<RootQueryToVisibleProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  readonly nodes: Maybe<ReadonlyArray<Maybe<VisibleProduct>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  readonly pageInfo: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToVisibleProductConnectionEdge {
  readonly __typename: 'RootQueryToVisibleProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  readonly cursor: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated
   */
  readonly node: Maybe<VisibleProduct>;
}

/** The writing setting type */
export interface WritingSettings {
  readonly __typename: 'WritingSettings';
  /**
   * Default post category.
   * @deprecated
   */
  readonly defaultCategory: Maybe<Scalars['Int']>;
  /**
   * Default post format.
   * @deprecated
   */
  readonly defaultPostFormat: Maybe<Scalars['String']>;
  /**
   * Convert emoticons like :-) and :-P to graphics on display.
   * @deprecated
   */
  readonly useSmilies: Maybe<Scalars['Boolean']>;
}

/** The root mutation */
export interface RootMutation {
  readonly __typename: 'RootMutation';
  /**
   * The payload for the UpdateCategory mutation
   * @deprecated
   */
  readonly updateCategory: Maybe<UpdateCategoryPayload>;
  /**
   * The payload for the UpdatePostFormat mutation
   * @deprecated
   */
  readonly updatePostFormat: Maybe<UpdatePostFormatPayload>;
  /**
   * The payload for the UpdateProductCategory mutation
   * @deprecated
   */
  readonly updateProductCategory: Maybe<UpdateProductCategoryPayload>;
  /**
   * The payload for the UpdateProductTag mutation
   * @deprecated
   */
  readonly updateProductTag: Maybe<UpdateProductTagPayload>;
  /**
   * The payload for the UpdateProductType mutation
   * @deprecated
   */
  readonly updateProductType: Maybe<UpdateProductTypePayload>;
  /**
   * The payload for the UpdateShippingClass mutation
   * @deprecated
   */
  readonly updateShippingClass: Maybe<UpdateShippingClassPayload>;
  /**
   * The payload for the UpdateTag mutation
   * @deprecated
   */
  readonly updateTag: Maybe<UpdateTagPayload>;
  /**
   * The payload for the UpdateVisibleProduct mutation
   * @deprecated
   */
  readonly updateVisibleProduct: Maybe<UpdateVisibleProductPayload>;
  /**
   * The payload for the addFee mutation
   * @deprecated
   */
  readonly addFee: Maybe<AddFeePayload>;
  /**
   * The payload for the addToCart mutation
   * @deprecated
   */
  readonly addToCart: Maybe<AddToCartPayload>;
  /**
   * The payload for the applyCoupon mutation
   * @deprecated
   */
  readonly applyCoupon: Maybe<ApplyCouponPayload>;
  /**
   * The payload for the checkout mutation
   * @deprecated
   */
  readonly checkout: Maybe<CheckoutPayload>;
  /**
   * The payload for the createCategory mutation
   * @deprecated
   */
  readonly createCategory: Maybe<CreateCategoryPayload>;
  /**
   * The payload for the createComment mutation
   * @deprecated
   */
  readonly createComment: Maybe<CreateCommentPayload>;
  /**
   * The payload for the createMediaItem mutation
   * @deprecated
   */
  readonly createMediaItem: Maybe<CreateMediaItemPayload>;
  /**
   * The payload for the createOrder mutation
   * @deprecated
   */
  readonly createOrder: Maybe<CreateOrderPayload>;
  /**
   * The payload for the createPage mutation
   * @deprecated
   */
  readonly createPage: Maybe<CreatePagePayload>;
  /**
   * The payload for the createPost mutation
   * @deprecated
   */
  readonly createPost: Maybe<CreatePostPayload>;
  /**
   * The payload for the createPostFormat mutation
   * @deprecated
   */
  readonly createPostFormat: Maybe<CreatePostFormatPayload>;
  /**
   * The payload for the createProductCategory mutation
   * @deprecated
   */
  readonly createProductCategory: Maybe<CreateProductCategoryPayload>;
  /**
   * The payload for the createProductTag mutation
   * @deprecated
   */
  readonly createProductTag: Maybe<CreateProductTagPayload>;
  /**
   * The payload for the createProductType mutation
   * @deprecated
   */
  readonly createProductType: Maybe<CreateProductTypePayload>;
  /**
   * The payload for the createShippingClass mutation
   * @deprecated
   */
  readonly createShippingClass: Maybe<CreateShippingClassPayload>;
  /**
   * The payload for the createTag mutation
   * @deprecated
   */
  readonly createTag: Maybe<CreateTagPayload>;
  /**
   * The payload for the createUser mutation
   * @deprecated
   */
  readonly createUser: Maybe<CreateUserPayload>;
  /**
   * The payload for the createVisibleProduct mutation
   * @deprecated
   */
  readonly createVisibleProduct: Maybe<CreateVisibleProductPayload>;
  /**
   * The payload for the deleteCategory mutation
   * @deprecated
   */
  readonly deleteCategory: Maybe<DeleteCategoryPayload>;
  /**
   * The payload for the deleteComment mutation
   * @deprecated
   */
  readonly deleteComment: Maybe<DeleteCommentPayload>;
  /**
   * The payload for the deleteMediaItem mutation
   * @deprecated
   */
  readonly deleteMediaItem: Maybe<DeleteMediaItemPayload>;
  /**
   * The payload for the deleteOrder mutation
   * @deprecated
   */
  readonly deleteOrder: Maybe<DeleteOrderPayload>;
  /**
   * The payload for the deleteOrderItems mutation
   * @deprecated
   */
  readonly deleteOrderItems: Maybe<DeleteOrderItemsPayload>;
  /**
   * The payload for the deletePage mutation
   * @deprecated
   */
  readonly deletePage: Maybe<DeletePagePayload>;
  /**
   * The payload for the deletePost mutation
   * @deprecated
   */
  readonly deletePost: Maybe<DeletePostPayload>;
  /**
   * The payload for the deletePostFormat mutation
   * @deprecated
   */
  readonly deletePostFormat: Maybe<DeletePostFormatPayload>;
  /**
   * The payload for the deleteProductCategory mutation
   * @deprecated
   */
  readonly deleteProductCategory: Maybe<DeleteProductCategoryPayload>;
  /**
   * The payload for the deleteProductTag mutation
   * @deprecated
   */
  readonly deleteProductTag: Maybe<DeleteProductTagPayload>;
  /**
   * The payload for the deleteProductType mutation
   * @deprecated
   */
  readonly deleteProductType: Maybe<DeleteProductTypePayload>;
  /**
   * The payload for the deleteReview mutation
   * @deprecated
   */
  readonly deleteReview: Maybe<DeleteReviewPayload>;
  /**
   * The payload for the deleteShippingClass mutation
   * @deprecated
   */
  readonly deleteShippingClass: Maybe<DeleteShippingClassPayload>;
  /**
   * The payload for the deleteTag mutation
   * @deprecated
   */
  readonly deleteTag: Maybe<DeleteTagPayload>;
  /**
   * The payload for the deleteUser mutation
   * @deprecated
   */
  readonly deleteUser: Maybe<DeleteUserPayload>;
  /**
   * The payload for the deleteVisibleProduct mutation
   * @deprecated
   */
  readonly deleteVisibleProduct: Maybe<DeleteVisibleProductPayload>;
  /**
   * The payload for the emptyCart mutation
   * @deprecated
   */
  readonly emptyCart: Maybe<EmptyCartPayload>;
  /** @deprecated  */
  readonly increaseCount: Maybe<Scalars['Int']>;
  /**
   * The payload for the registerCustomer mutation
   * @deprecated
   */
  readonly registerCustomer: Maybe<RegisterCustomerPayload>;
  /**
   * The payload for the registerUser mutation
   * @deprecated
   */
  readonly registerUser: Maybe<RegisterUserPayload>;
  /**
   * The payload for the removeCoupons mutation
   * @deprecated
   */
  readonly removeCoupons: Maybe<RemoveCouponsPayload>;
  /**
   * The payload for the removeItemsFromCart mutation
   * @deprecated
   */
  readonly removeItemsFromCart: Maybe<RemoveItemsFromCartPayload>;
  /**
   * The payload for the resetUserPassword mutation
   * @deprecated
   */
  readonly resetUserPassword: Maybe<ResetUserPasswordPayload>;
  /**
   * The payload for the restoreCartItems mutation
   * @deprecated
   */
  readonly restoreCartItems: Maybe<RestoreCartItemsPayload>;
  /**
   * The payload for the restoreComment mutation
   * @deprecated
   */
  readonly restoreComment: Maybe<RestoreCommentPayload>;
  /**
   * The payload for the restoreReview mutation
   * @deprecated
   */
  readonly restoreReview: Maybe<RestoreReviewPayload>;
  /**
   * The payload for the sendPasswordResetEmail mutation
   * @deprecated
   */
  readonly sendPasswordResetEmail: Maybe<SendPasswordResetEmailPayload>;
  /**
   * The payload for the updateComment mutation
   * @deprecated
   */
  readonly updateComment: Maybe<UpdateCommentPayload>;
  /**
   * The payload for the updateCustomer mutation
   * @deprecated
   */
  readonly updateCustomer: Maybe<UpdateCustomerPayload>;
  /**
   * The payload for the updateItemQuantities mutation
   * @deprecated
   */
  readonly updateItemQuantities: Maybe<UpdateItemQuantitiesPayload>;
  /**
   * The payload for the updateMediaItem mutation
   * @deprecated
   */
  readonly updateMediaItem: Maybe<UpdateMediaItemPayload>;
  /**
   * The payload for the updateOrder mutation
   * @deprecated
   */
  readonly updateOrder: Maybe<UpdateOrderPayload>;
  /**
   * The payload for the updatePage mutation
   * @deprecated
   */
  readonly updatePage: Maybe<UpdatePagePayload>;
  /**
   * The payload for the updatePost mutation
   * @deprecated
   */
  readonly updatePost: Maybe<UpdatePostPayload>;
  /**
   * The payload for the updateReview mutation
   * @deprecated
   */
  readonly updateReview: Maybe<UpdateReviewPayload>;
  /**
   * The payload for the updateSettings mutation
   * @deprecated
   */
  readonly updateSettings: Maybe<UpdateSettingsPayload>;
  /**
   * The payload for the updateShippingMethod mutation
   * @deprecated
   */
  readonly updateShippingMethod: Maybe<UpdateShippingMethodPayload>;
  /**
   * The payload for the updateUser mutation
   * @deprecated
   */
  readonly updateUser: Maybe<UpdateUserPayload>;
  /**
   * The payload for the writeReview mutation
   * @deprecated
   */
  readonly writeReview: Maybe<WriteReviewPayload>;
}


/** The root mutation */
export interface RootMutationUpdateCategoryArgs {
  input: UpdateCategoryInput;
}


/** The root mutation */
export interface RootMutationUpdatePostFormatArgs {
  input: UpdatePostFormatInput;
}


/** The root mutation */
export interface RootMutationUpdateProductCategoryArgs {
  input: UpdateProductCategoryInput;
}


/** The root mutation */
export interface RootMutationUpdateProductTagArgs {
  input: UpdateProductTagInput;
}


/** The root mutation */
export interface RootMutationUpdateProductTypeArgs {
  input: UpdateProductTypeInput;
}


/** The root mutation */
export interface RootMutationUpdateShippingClassArgs {
  input: UpdateShippingClassInput;
}


/** The root mutation */
export interface RootMutationUpdateTagArgs {
  input: UpdateTagInput;
}


/** The root mutation */
export interface RootMutationUpdateVisibleProductArgs {
  input: UpdateVisibleProductInput;
}


/** The root mutation */
export interface RootMutationAddFeeArgs {
  input: AddFeeInput;
}


/** The root mutation */
export interface RootMutationAddToCartArgs {
  input: AddToCartInput;
}


/** The root mutation */
export interface RootMutationApplyCouponArgs {
  input: ApplyCouponInput;
}


/** The root mutation */
export interface RootMutationCheckoutArgs {
  input: CheckoutInput;
}


/** The root mutation */
export interface RootMutationCreateCategoryArgs {
  input: CreateCategoryInput;
}


/** The root mutation */
export interface RootMutationCreateCommentArgs {
  input: CreateCommentInput;
}


/** The root mutation */
export interface RootMutationCreateMediaItemArgs {
  input: CreateMediaItemInput;
}


/** The root mutation */
export interface RootMutationCreateOrderArgs {
  input: CreateOrderInput;
}


/** The root mutation */
export interface RootMutationCreatePageArgs {
  input: CreatePageInput;
}


/** The root mutation */
export interface RootMutationCreatePostArgs {
  input: CreatePostInput;
}


/** The root mutation */
export interface RootMutationCreatePostFormatArgs {
  input: CreatePostFormatInput;
}


/** The root mutation */
export interface RootMutationCreateProductCategoryArgs {
  input: CreateProductCategoryInput;
}


/** The root mutation */
export interface RootMutationCreateProductTagArgs {
  input: CreateProductTagInput;
}


/** The root mutation */
export interface RootMutationCreateProductTypeArgs {
  input: CreateProductTypeInput;
}


/** The root mutation */
export interface RootMutationCreateShippingClassArgs {
  input: CreateShippingClassInput;
}


/** The root mutation */
export interface RootMutationCreateTagArgs {
  input: CreateTagInput;
}


/** The root mutation */
export interface RootMutationCreateUserArgs {
  input: CreateUserInput;
}


/** The root mutation */
export interface RootMutationCreateVisibleProductArgs {
  input: CreateVisibleProductInput;
}


/** The root mutation */
export interface RootMutationDeleteCategoryArgs {
  input: DeleteCategoryInput;
}


/** The root mutation */
export interface RootMutationDeleteCommentArgs {
  input: DeleteCommentInput;
}


/** The root mutation */
export interface RootMutationDeleteMediaItemArgs {
  input: DeleteMediaItemInput;
}


/** The root mutation */
export interface RootMutationDeleteOrderArgs {
  input: DeleteOrderInput;
}


/** The root mutation */
export interface RootMutationDeleteOrderItemsArgs {
  input: DeleteOrderItemsInput;
}


/** The root mutation */
export interface RootMutationDeletePageArgs {
  input: DeletePageInput;
}


/** The root mutation */
export interface RootMutationDeletePostArgs {
  input: DeletePostInput;
}


/** The root mutation */
export interface RootMutationDeletePostFormatArgs {
  input: DeletePostFormatInput;
}


/** The root mutation */
export interface RootMutationDeleteProductCategoryArgs {
  input: DeleteProductCategoryInput;
}


/** The root mutation */
export interface RootMutationDeleteProductTagArgs {
  input: DeleteProductTagInput;
}


/** The root mutation */
export interface RootMutationDeleteProductTypeArgs {
  input: DeleteProductTypeInput;
}


/** The root mutation */
export interface RootMutationDeleteReviewArgs {
  input: DeleteReviewInput;
}


/** The root mutation */
export interface RootMutationDeleteShippingClassArgs {
  input: DeleteShippingClassInput;
}


/** The root mutation */
export interface RootMutationDeleteTagArgs {
  input: DeleteTagInput;
}


/** The root mutation */
export interface RootMutationDeleteUserArgs {
  input: DeleteUserInput;
}


/** The root mutation */
export interface RootMutationDeleteVisibleProductArgs {
  input: DeleteVisibleProductInput;
}


/** The root mutation */
export interface RootMutationEmptyCartArgs {
  input: EmptyCartInput;
}


/** The root mutation */
export interface RootMutationIncreaseCountArgs {
  count: Maybe<Scalars['Int']>;
}


/** The root mutation */
export interface RootMutationRegisterCustomerArgs {
  input: RegisterCustomerInput;
}


/** The root mutation */
export interface RootMutationRegisterUserArgs {
  input: RegisterUserInput;
}


/** The root mutation */
export interface RootMutationRemoveCouponsArgs {
  input: RemoveCouponsInput;
}


/** The root mutation */
export interface RootMutationRemoveItemsFromCartArgs {
  input: RemoveItemsFromCartInput;
}


/** The root mutation */
export interface RootMutationResetUserPasswordArgs {
  input: ResetUserPasswordInput;
}


/** The root mutation */
export interface RootMutationRestoreCartItemsArgs {
  input: RestoreCartItemsInput;
}


/** The root mutation */
export interface RootMutationRestoreCommentArgs {
  input: RestoreCommentInput;
}


/** The root mutation */
export interface RootMutationRestoreReviewArgs {
  input: RestoreReviewInput;
}


/** The root mutation */
export interface RootMutationSendPasswordResetEmailArgs {
  input: SendPasswordResetEmailInput;
}


/** The root mutation */
export interface RootMutationUpdateCommentArgs {
  input: UpdateCommentInput;
}


/** The root mutation */
export interface RootMutationUpdateCustomerArgs {
  input: UpdateCustomerInput;
}


/** The root mutation */
export interface RootMutationUpdateItemQuantitiesArgs {
  input: UpdateItemQuantitiesInput;
}


/** The root mutation */
export interface RootMutationUpdateMediaItemArgs {
  input: UpdateMediaItemInput;
}


/** The root mutation */
export interface RootMutationUpdateOrderArgs {
  input: UpdateOrderInput;
}


/** The root mutation */
export interface RootMutationUpdatePageArgs {
  input: UpdatePageInput;
}


/** The root mutation */
export interface RootMutationUpdatePostArgs {
  input: UpdatePostInput;
}


/** The root mutation */
export interface RootMutationUpdateReviewArgs {
  input: UpdateReviewInput;
}


/** The root mutation */
export interface RootMutationUpdateSettingsArgs {
  input: UpdateSettingsInput;
}


/** The root mutation */
export interface RootMutationUpdateShippingMethodArgs {
  input: UpdateShippingMethodInput;
}


/** The root mutation */
export interface RootMutationUpdateUserArgs {
  input: UpdateUserInput;
}


/** The root mutation */
export interface RootMutationWriteReviewArgs {
  input: WriteReviewInput;
}

/** Input for the UpdateCategory mutation */
export interface UpdateCategoryInput {
  /** The slug that the category will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the category object */
  readonly description: Maybe<Scalars['String']>;
  /** The ID of the category object to update */
  readonly id: Scalars['ID'];
  /** The name of the category object to mutate */
  readonly name: Maybe<Scalars['String']>;
  /** The ID of the category that should be set as the parent */
  readonly parentId: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the UpdateCategory mutation */
export interface UpdateCategoryPayload {
  readonly __typename: 'UpdateCategoryPayload';
  /**
   * The created category
   * @deprecated
   */
  readonly category: Maybe<Category>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
}

/** Input for the UpdatePostFormat mutation */
export interface UpdatePostFormatInput {
  /** The slug that the post_format will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the post_format object */
  readonly description: Maybe<Scalars['String']>;
  /** The ID of the postFormat object to update */
  readonly id: Scalars['ID'];
  /** The name of the post_format object to mutate */
  readonly name: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the UpdatePostFormat mutation */
export interface UpdatePostFormatPayload {
  readonly __typename: 'UpdatePostFormatPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The created post_format
   * @deprecated
   */
  readonly postFormat: Maybe<PostFormat>;
}

/** Input for the UpdateProductCategory mutation */
export interface UpdateProductCategoryInput {
  /** The slug that the product_cat will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the product_cat object */
  readonly description: Maybe<Scalars['String']>;
  /** The ID of the productCategory object to update */
  readonly id: Scalars['ID'];
  /** The name of the product_cat object to mutate */
  readonly name: Maybe<Scalars['String']>;
  /** The ID of the product_cat that should be set as the parent */
  readonly parentId: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the UpdateProductCategory mutation */
export interface UpdateProductCategoryPayload {
  readonly __typename: 'UpdateProductCategoryPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The created product_cat
   * @deprecated
   */
  readonly productCategory: Maybe<ProductCategory>;
}

/** Input for the UpdateProductTag mutation */
export interface UpdateProductTagInput {
  /** The slug that the product_tag will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the product_tag object */
  readonly description: Maybe<Scalars['String']>;
  /** The ID of the productTag object to update */
  readonly id: Scalars['ID'];
  /** The name of the product_tag object to mutate */
  readonly name: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the UpdateProductTag mutation */
export interface UpdateProductTagPayload {
  readonly __typename: 'UpdateProductTagPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The created product_tag
   * @deprecated
   */
  readonly productTag: Maybe<ProductTag>;
}

/** Input for the UpdateProductType mutation */
export interface UpdateProductTypeInput {
  /** The slug that the product_type will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the product_type object */
  readonly description: Maybe<Scalars['String']>;
  /** The ID of the productType object to update */
  readonly id: Scalars['ID'];
  /** The name of the product_type object to mutate */
  readonly name: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the UpdateProductType mutation */
export interface UpdateProductTypePayload {
  readonly __typename: 'UpdateProductTypePayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The created product_type
   * @deprecated
   */
  readonly productType: Maybe<ProductType>;
}

/** Input for the UpdateShippingClass mutation */
export interface UpdateShippingClassInput {
  /** The slug that the product_shipping_class will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the product_shipping_class object */
  readonly description: Maybe<Scalars['String']>;
  /** The ID of the shippingClass object to update */
  readonly id: Scalars['ID'];
  /** The name of the product_shipping_class object to mutate */
  readonly name: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the UpdateShippingClass mutation */
export interface UpdateShippingClassPayload {
  readonly __typename: 'UpdateShippingClassPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The created product_shipping_class
   * @deprecated
   */
  readonly shippingClass: Maybe<ShippingClass>;
}

/** Input for the UpdateTag mutation */
export interface UpdateTagInput {
  /** The slug that the post_tag will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the post_tag object */
  readonly description: Maybe<Scalars['String']>;
  /** The ID of the tag object to update */
  readonly id: Scalars['ID'];
  /** The name of the post_tag object to mutate */
  readonly name: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the UpdateTag mutation */
export interface UpdateTagPayload {
  readonly __typename: 'UpdateTagPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The created post_tag
   * @deprecated
   */
  readonly tag: Maybe<Tag>;
}

/** Input for the UpdateVisibleProduct mutation */
export interface UpdateVisibleProductInput {
  /** The slug that the product_visibility will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the product_visibility object */
  readonly description: Maybe<Scalars['String']>;
  /** The ID of the visibleProduct object to update */
  readonly id: Scalars['ID'];
  /** The name of the product_visibility object to mutate */
  readonly name: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the UpdateVisibleProduct mutation */
export interface UpdateVisibleProductPayload {
  readonly __typename: 'UpdateVisibleProductPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The created product_visibility
   * @deprecated
   */
  readonly visibleProduct: Maybe<VisibleProduct>;
}

/** Input for the addFee mutation */
export interface AddFeeInput {
  /** Fee amount */
  readonly amount: Maybe<Scalars['Float']>;
  readonly clientMutationId: Scalars['String'];
  /** Unique name for the fee. */
  readonly name: Scalars['String'];
  /** The tax class for the fee if taxable. */
  readonly taxClass: Maybe<TaxClassEnum>;
  /** Is the fee taxable? */
  readonly taxable: Maybe<Scalars['Boolean']>;
}

/** The payload for the addFee mutation */
export interface AddFeePayload {
  readonly __typename: 'AddFeePayload';
  /** @deprecated  */
  readonly cart: Maybe<Cart>;
  /** @deprecated  */
  readonly cartFee: Maybe<CartFee>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
}

/** Input for the addToCart mutation */
export interface AddToCartInput {
  readonly clientMutationId: Scalars['String'];
  /** JSON string representation of extra cart item data */
  readonly extraData: Maybe<Scalars['String']>;
  /** Cart item product database ID or global ID */
  readonly productId: Scalars['Int'];
  /** Cart item quantity */
  readonly quantity: Maybe<Scalars['Int']>;
  /** Cart item product variation attributes */
  readonly variation: Maybe<ReadonlyArray<Maybe<ProductAttributeInput>>>;
  /** Cart item product variation database ID or global ID */
  readonly variationId: Maybe<Scalars['Int']>;
}

/** Options for ordering the connection */
export interface ProductAttributeInput {
  readonly attributeName: Scalars['String'];
  readonly attributeValue: Maybe<Scalars['String']>;
}

/** The payload for the addToCart mutation */
export interface AddToCartPayload {
  readonly __typename: 'AddToCartPayload';
  /** @deprecated  */
  readonly cart: Maybe<Cart>;
  /** @deprecated  */
  readonly cartItem: Maybe<CartItem>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
}

/** Input for the applyCoupon mutation */
export interface ApplyCouponInput {
  readonly clientMutationId: Scalars['String'];
  /** Code of coupon being applied */
  readonly code: Scalars['String'];
}

/** The payload for the applyCoupon mutation */
export interface ApplyCouponPayload {
  readonly __typename: 'ApplyCouponPayload';
  /** @deprecated  */
  readonly cart: Maybe<Cart>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
}

/** Input for the checkout mutation */
export interface CheckoutInput {
  /** Create new customer account */
  readonly account: Maybe<CreateAccountInput>;
  /** Order billing address */
  readonly billing: Maybe<CustomerAddressInput>;
  readonly clientMutationId: Scalars['String'];
  /** Order customer note */
  readonly customerNote: Maybe<Scalars['String']>;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  readonly isPaid: Maybe<Scalars['Boolean']>;
  /** Order meta data */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaDataInput>>>;
  /** Payment method ID. */
  readonly paymentMethod: Maybe<Scalars['String']>;
  /** Ship to a separate address */
  readonly shipToDifferentAddress: Maybe<Scalars['Boolean']>;
  /** Order shipping address */
  readonly shipping: Maybe<CustomerAddressInput>;
  /** Order shipping method */
  readonly shippingMethod: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Order transaction ID */
  readonly transactionId: Maybe<Scalars['String']>;
}

/** Customer account credentials */
export interface CreateAccountInput {
  /** Customer password */
  readonly password: Scalars['String'];
  /** Customer username */
  readonly username: Scalars['String'];
}

/** Customer address information */
export interface CustomerAddressInput {
  /** Address 1 */
  readonly address1: Maybe<Scalars['String']>;
  /** Address 2 */
  readonly address2: Maybe<Scalars['String']>;
  /** City */
  readonly city: Maybe<Scalars['String']>;
  /** Company */
  readonly company: Maybe<Scalars['String']>;
  /** Country */
  readonly country: Maybe<CountriesEnum>;
  /** E-mail */
  readonly email: Maybe<Scalars['String']>;
  /** First name */
  readonly firstName: Maybe<Scalars['String']>;
  /** Last name */
  readonly lastName: Maybe<Scalars['String']>;
  /** Clear old address data */
  readonly overwrite: Maybe<Scalars['Boolean']>;
  /** Phone */
  readonly phone: Maybe<Scalars['String']>;
  /** Zip Postal Code */
  readonly postcode: Maybe<Scalars['String']>;
  /** State */
  readonly state: Maybe<Scalars['String']>;
}

/** Meta data. */
export interface MetaDataInput {
  /** Meta key. */
  readonly key: Scalars['String'];
  /** Meta value. */
  readonly value: Scalars['String'];
}

/** The payload for the checkout mutation */
export interface CheckoutPayload {
  readonly __typename: 'CheckoutPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly customer: Maybe<Customer>;
  /** @deprecated  */
  readonly order: Maybe<Order>;
  /** @deprecated  */
  readonly redirect: Maybe<Scalars['String']>;
  /** @deprecated  */
  readonly result: Maybe<Scalars['String']>;
}

/** Input for the createCategory mutation */
export interface CreateCategoryInput {
  /** The slug that the category will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the category object */
  readonly description: Maybe<Scalars['String']>;
  /** The name of the category object to mutate */
  readonly name: Scalars['String'];
  /** The ID of the category that should be set as the parent */
  readonly parentId: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the createCategory mutation */
export interface CreateCategoryPayload {
  readonly __typename: 'CreateCategoryPayload';
  /**
   * The created category
   * @deprecated
   */
  readonly category: Maybe<Category>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
}

/** Input for the createComment mutation */
export interface CreateCommentInput {
  /** The approval status of the comment. */
  readonly approved: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  readonly author: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  readonly authorEmail: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  readonly authorUrl: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The ID of the post object the comment belongs to. */
  readonly commentOn: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  readonly content: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: Maybe<Scalars['String']>;
  /** Parent comment of current comment. */
  readonly parent: Maybe<Scalars['ID']>;
  /** Type of comment. */
  readonly type: Maybe<Scalars['String']>;
}

/** The payload for the createComment mutation */
export interface CreateCommentPayload {
  readonly __typename: 'CreateCommentPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The comment that was created
   * @deprecated
   */
  readonly comment: Maybe<Comment>;
  /**
   * Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache
   * @deprecated
   */
  readonly success: Maybe<Scalars['Boolean']>;
}

/** Input for the createMediaItem mutation */
export interface CreateMediaItemInput {
  /** Alternative text to display when mediaItem is not displayed */
  readonly altText: Maybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  readonly authorId: Maybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  readonly caption: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The comment status for the mediaItem */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** The date of the mediaItem */
  readonly date: Maybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  readonly dateGmt: Maybe<Scalars['String']>;
  /** Description of the mediaItem */
  readonly description: Maybe<Scalars['String']>;
  /** The file name of the mediaItem */
  readonly filePath: Maybe<Scalars['String']>;
  /** The file type of the mediaItem */
  readonly fileType: Maybe<MimeTypeEnum>;
  /** The WordPress post ID or the graphQL postId of the parent object */
  readonly parentId: Maybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  readonly pingStatus: Maybe<Scalars['String']>;
  /** The slug of the mediaItem */
  readonly slug: Maybe<Scalars['String']>;
  /** The status of the mediaItem */
  readonly status: Maybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  readonly title: Maybe<Scalars['String']>;
}

/** The status of the media item object. */
export enum MediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the trash status */
  Trash = 'TRASH'
}

/** The payload for the createMediaItem mutation */
export interface CreateMediaItemPayload {
  readonly __typename: 'CreateMediaItemPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly mediaItem: Maybe<MediaItem>;
}

/** Input for the createOrder mutation */
export interface CreateOrderInput {
  /** Order billing address */
  readonly billing: Maybe<CustomerAddressInput>;
  readonly clientMutationId: Scalars['String'];
  /** Coupons codes to be applied to order */
  readonly coupons: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Currency the order was created with, in ISO format. */
  readonly currency: Maybe<Scalars['String']>;
  /** Order customer ID */
  readonly customerId: Maybe<Scalars['Int']>;
  /** Note left by customer during checkout. */
  readonly customerNote: Maybe<Scalars['String']>;
  /** Order shipping lines */
  readonly feeLines: Maybe<ReadonlyArray<Maybe<FeeLineInput>>>;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  readonly isPaid: Maybe<Scalars['Boolean']>;
  /** Order line items */
  readonly lineItems: Maybe<ReadonlyArray<Maybe<LineItemInput>>>;
  /** Order meta data */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaDataInput>>>;
  /** Parent order ID. */
  readonly parentId: Maybe<Scalars['Int']>;
  /** Payment method ID. */
  readonly paymentMethod: Maybe<Scalars['String']>;
  /** Payment method title. */
  readonly paymentMethodTitle: Maybe<Scalars['String']>;
  /** Order shipping address */
  readonly shipping: Maybe<CustomerAddressInput>;
  /** Order shipping lines */
  readonly shippingLines: Maybe<ReadonlyArray<Maybe<ShippingLineInput>>>;
  /** Order status */
  readonly status: Maybe<OrderStatusEnum>;
  /** Order transaction ID */
  readonly transactionId: Maybe<Scalars['String']>;
}

/** Fee line data. */
export interface FeeLineInput {
  /** Fee amount. */
  readonly amount: Maybe<Scalars['String']>;
  /** Fee Line ID */
  readonly id: Maybe<Scalars['ID']>;
  /** Fee name. */
  readonly name: Maybe<Scalars['String']>;
  /** Tax class of fee. */
  readonly taxClass: Maybe<TaxClassEnum>;
  /** Tax status of fee. */
  readonly taxStatus: Maybe<TaxStatusEnum>;
  /** Line total (after discounts). */
  readonly total: Maybe<Scalars['String']>;
}

/** Meta data. */
export interface LineItemInput {
  /** Line Item ID */
  readonly id: Maybe<Scalars['ID']>;
  /** Meta data. */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaDataInput>>>;
  /** Line name */
  readonly name: Maybe<Scalars['String']>;
  /** Product ID. */
  readonly productId: Maybe<Scalars['Int']>;
  /** Quantity ordered. */
  readonly quantity: Maybe<Scalars['Int']>;
  /** Product SKU. */
  readonly sku: Maybe<Scalars['String']>;
  /** Line subtotal (before discounts). */
  readonly subtotal: Maybe<Scalars['String']>;
  /** Tax class of product. */
  readonly taxClass: Maybe<TaxClassEnum>;
  /** Line total (after discounts). */
  readonly total: Maybe<Scalars['String']>;
  /** Variation ID, if applicable. */
  readonly variationId: Maybe<Scalars['Int']>;
}

/** Shipping lines data. */
export interface ShippingLineInput {
  /** Shipping Line ID */
  readonly id: Maybe<Scalars['ID']>;
  /** Shipping instance ID. */
  readonly instanceId: Maybe<Scalars['String']>;
  /** Meta data. */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaDataInput>>>;
  /** Shipping method ID. */
  readonly methodId: Scalars['String'];
  /** Shipping method name. */
  readonly methodTitle: Scalars['String'];
  /** Line total (after discounts). */
  readonly total: Scalars['String'];
}

/** The payload for the createOrder mutation */
export interface CreateOrderPayload {
  readonly __typename: 'CreateOrderPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly order: Maybe<Order>;
  /** @deprecated  */
  readonly orderId: Maybe<Scalars['Int']>;
}

/** Input for the createPage mutation */
export interface CreatePageInput {
  /** The userId to assign as the author of the object */
  readonly authorId: Maybe<Scalars['ID']>;
  readonly clientMutationId: Scalars['String'];
  /** The comment status for the object */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** The content of the object */
  readonly content: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  readonly parentId: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  readonly password: Maybe<Scalars['String']>;
  /** The slug of the object */
  readonly slug: Maybe<Scalars['String']>;
  /** The status of the object */
  readonly status: Maybe<PostStatusEnum>;
  /** The title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** The payload for the createPage mutation */
export interface CreatePagePayload {
  readonly __typename: 'CreatePagePayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly page: Maybe<Page>;
}

/** Input for the createPost mutation */
export interface CreatePostInput {
  /** The userId to assign as the author of the object */
  readonly authorId: Maybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  readonly categories: Maybe<PostCategoriesInput>;
  readonly clientMutationId: Scalars['String'];
  /** The comment status for the object */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** The content of the object */
  readonly content: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: Maybe<Scalars['String']>;
  /** The excerpt of the object */
  readonly excerpt: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  readonly password: Maybe<Scalars['String']>;
  /** The ping status for the object */
  readonly pingStatus: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  readonly pinged: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  readonly postFormats: Maybe<PostPostFormatsInput>;
  /** The slug of the object */
  readonly slug: Maybe<Scalars['String']>;
  /** The status of the object */
  readonly status: Maybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  readonly tags: Maybe<PostTagsInput>;
  /** The title of the object */
  readonly title: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  readonly toPing: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

/** Set relationships between the post to categories */
export interface PostCategoriesInput {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  readonly append: Maybe<Scalars['Boolean']>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<PostCategoriesNodeInput>>>;
}

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export interface PostCategoriesNodeInput {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  readonly description: Maybe<Scalars['String']>;
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  readonly id: Maybe<Scalars['ID']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  readonly name: Maybe<Scalars['String']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  readonly slug: Maybe<Scalars['String']>;
}

/** Set relationships between the post to postFormats */
export interface PostPostFormatsInput {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  readonly append: Maybe<Scalars['Boolean']>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<PostPostFormatsNodeInput>>>;
}

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export interface PostPostFormatsNodeInput {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  readonly description: Maybe<Scalars['String']>;
  /** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
  readonly id: Maybe<Scalars['ID']>;
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  readonly name: Maybe<Scalars['String']>;
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  readonly slug: Maybe<Scalars['String']>;
}

/** Set relationships between the post to tags */
export interface PostTagsInput {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  readonly append: Maybe<Scalars['Boolean']>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<PostTagsNodeInput>>>;
}

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export interface PostTagsNodeInput {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  readonly description: Maybe<Scalars['String']>;
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  readonly id: Maybe<Scalars['ID']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  readonly name: Maybe<Scalars['String']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the createPost mutation */
export interface CreatePostPayload {
  readonly __typename: 'CreatePostPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly post: Maybe<Post>;
}

/** Input for the createPostFormat mutation */
export interface CreatePostFormatInput {
  /** The slug that the post_format will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the post_format object */
  readonly description: Maybe<Scalars['String']>;
  /** The name of the post_format object to mutate */
  readonly name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the createPostFormat mutation */
export interface CreatePostFormatPayload {
  readonly __typename: 'CreatePostFormatPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The created post_format
   * @deprecated
   */
  readonly postFormat: Maybe<PostFormat>;
}

/** Input for the createProductCategory mutation */
export interface CreateProductCategoryInput {
  /** The slug that the product_cat will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the product_cat object */
  readonly description: Maybe<Scalars['String']>;
  /** The name of the product_cat object to mutate */
  readonly name: Scalars['String'];
  /** The ID of the product_cat that should be set as the parent */
  readonly parentId: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the createProductCategory mutation */
export interface CreateProductCategoryPayload {
  readonly __typename: 'CreateProductCategoryPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The created product_cat
   * @deprecated
   */
  readonly productCategory: Maybe<ProductCategory>;
}

/** Input for the createProductTag mutation */
export interface CreateProductTagInput {
  /** The slug that the product_tag will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the product_tag object */
  readonly description: Maybe<Scalars['String']>;
  /** The name of the product_tag object to mutate */
  readonly name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the createProductTag mutation */
export interface CreateProductTagPayload {
  readonly __typename: 'CreateProductTagPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The created product_tag
   * @deprecated
   */
  readonly productTag: Maybe<ProductTag>;
}

/** Input for the createProductType mutation */
export interface CreateProductTypeInput {
  /** The slug that the product_type will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the product_type object */
  readonly description: Maybe<Scalars['String']>;
  /** The name of the product_type object to mutate */
  readonly name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the createProductType mutation */
export interface CreateProductTypePayload {
  readonly __typename: 'CreateProductTypePayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The created product_type
   * @deprecated
   */
  readonly productType: Maybe<ProductType>;
}

/** Input for the createShippingClass mutation */
export interface CreateShippingClassInput {
  /** The slug that the product_shipping_class will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the product_shipping_class object */
  readonly description: Maybe<Scalars['String']>;
  /** The name of the product_shipping_class object to mutate */
  readonly name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the createShippingClass mutation */
export interface CreateShippingClassPayload {
  readonly __typename: 'CreateShippingClassPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The created product_shipping_class
   * @deprecated
   */
  readonly shippingClass: Maybe<ShippingClass>;
}

/** Input for the createTag mutation */
export interface CreateTagInput {
  /** The slug that the post_tag will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the post_tag object */
  readonly description: Maybe<Scalars['String']>;
  /** The name of the post_tag object to mutate */
  readonly name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the createTag mutation */
export interface CreateTagPayload {
  readonly __typename: 'CreateTagPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The created post_tag
   * @deprecated
   */
  readonly tag: Maybe<Tag>;
}

/** Input for the createUser mutation */
export interface CreateUserInput {
  /** User's AOL IM account. */
  readonly aim: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** A string containing content about the user. */
  readonly description: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  readonly displayName: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  readonly email: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  readonly firstName: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  readonly jabber: Maybe<Scalars['String']>;
  /** The user's last name. */
  readonly lastName: Maybe<Scalars['String']>;
  /** User's locale. */
  readonly locale: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  readonly nicename: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  readonly nickname: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  readonly password: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  readonly registered: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  readonly richEditing: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  readonly roles: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** A string that contains the user's username for logging in. */
  readonly username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  readonly websiteUrl: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  readonly yim: Maybe<Scalars['String']>;
}

/** The payload for the createUser mutation */
export interface CreateUserPayload {
  readonly __typename: 'CreateUserPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly user: Maybe<User>;
}

/** Input for the createVisibleProduct mutation */
export interface CreateVisibleProductInput {
  /** The slug that the product_visibility will be an alias of */
  readonly aliasOf: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The description of the product_visibility object */
  readonly description: Maybe<Scalars['String']>;
  /** The name of the product_visibility object to mutate */
  readonly name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: Maybe<Scalars['String']>;
}

/** The payload for the createVisibleProduct mutation */
export interface CreateVisibleProductPayload {
  readonly __typename: 'CreateVisibleProductPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The created product_visibility
   * @deprecated
   */
  readonly visibleProduct: Maybe<VisibleProduct>;
}

/** Input for the deleteCategory mutation */
export interface DeleteCategoryInput {
  readonly clientMutationId: Scalars['String'];
  /** The ID of the category to delete */
  readonly id: Scalars['ID'];
}

/** The payload for the deleteCategory mutation */
export interface DeleteCategoryPayload {
  readonly __typename: 'DeleteCategoryPayload';
  /**
   * The deteted term object
   * @deprecated
   */
  readonly category: Maybe<Category>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The ID of the deleted object
   * @deprecated
   */
  readonly deletedId: Maybe<Scalars['ID']>;
}

/** Input for the deleteComment mutation */
export interface DeleteCommentInput {
  readonly clientMutationId: Scalars['String'];
  /** Whether the comment should be force deleted instead of being moved to the trash */
  readonly forceDelete: Maybe<Scalars['Boolean']>;
  /** The deleted comment ID */
  readonly id: Scalars['ID'];
}

/** The payload for the deleteComment mutation */
export interface DeleteCommentPayload {
  readonly __typename: 'DeleteCommentPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The deleted comment object
   * @deprecated
   */
  readonly comment: Maybe<Comment>;
  /**
   * The deleted comment ID
   * @deprecated
   */
  readonly deletedId: Maybe<Scalars['ID']>;
}

/** Input for the deleteMediaItem mutation */
export interface DeleteMediaItemInput {
  readonly clientMutationId: Scalars['String'];
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  readonly forceDelete: Maybe<Scalars['Boolean']>;
  /** The ID of the mediaItem to delete */
  readonly id: Scalars['ID'];
}

/** The payload for the deleteMediaItem mutation */
export interface DeleteMediaItemPayload {
  readonly __typename: 'DeleteMediaItemPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The ID of the deleted mediaItem
   * @deprecated
   */
  readonly deletedId: Maybe<Scalars['ID']>;
  /**
   * The mediaItem before it was deleted
   * @deprecated
   */
  readonly mediaItem: Maybe<MediaItem>;
}

/** Input for the deleteOrder mutation */
export interface DeleteOrderInput {
  readonly clientMutationId: Scalars['String'];
  /** Delete or simply place in trash. */
  readonly forceDelete: Maybe<Scalars['Boolean']>;
  /** Order global ID */
  readonly id: Maybe<Scalars['ID']>;
  /** Order WP ID */
  readonly orderId: Maybe<Scalars['Int']>;
}

/** The payload for the deleteOrder mutation */
export interface DeleteOrderPayload {
  readonly __typename: 'DeleteOrderPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly order: Maybe<Order>;
}

/** Input for the deleteOrderItems mutation */
export interface DeleteOrderItemsInput {
  readonly clientMutationId: Scalars['String'];
  /** Order global ID */
  readonly id: Maybe<Scalars['ID']>;
  /** ID Order items being deleted */
  readonly itemIds: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  /** Order WP ID */
  readonly orderId: Maybe<Scalars['Int']>;
}

/** The payload for the deleteOrderItems mutation */
export interface DeleteOrderItemsPayload {
  readonly __typename: 'DeleteOrderItemsPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly order: Maybe<Order>;
}

/** Input for the deletePage mutation */
export interface DeletePageInput {
  readonly clientMutationId: Scalars['String'];
  /** Whether the object should be force deleted instead of being moved to the trash */
  readonly forceDelete: Maybe<Scalars['Boolean']>;
  /** The ID of the page to delete */
  readonly id: Scalars['ID'];
}

/** The payload for the deletePage mutation */
export interface DeletePagePayload {
  readonly __typename: 'DeletePagePayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The ID of the deleted object
   * @deprecated
   */
  readonly deletedId: Maybe<Scalars['ID']>;
  /**
   * The object before it was deleted
   * @deprecated
   */
  readonly page: Maybe<Page>;
}

/** Input for the deletePost mutation */
export interface DeletePostInput {
  readonly clientMutationId: Scalars['String'];
  /** Whether the object should be force deleted instead of being moved to the trash */
  readonly forceDelete: Maybe<Scalars['Boolean']>;
  /** The ID of the post to delete */
  readonly id: Scalars['ID'];
}

/** The payload for the deletePost mutation */
export interface DeletePostPayload {
  readonly __typename: 'DeletePostPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The ID of the deleted object
   * @deprecated
   */
  readonly deletedId: Maybe<Scalars['ID']>;
  /**
   * The object before it was deleted
   * @deprecated
   */
  readonly post: Maybe<Post>;
}

/** Input for the deletePostFormat mutation */
export interface DeletePostFormatInput {
  readonly clientMutationId: Scalars['String'];
  /** The ID of the postFormat to delete */
  readonly id: Scalars['ID'];
}

/** The payload for the deletePostFormat mutation */
export interface DeletePostFormatPayload {
  readonly __typename: 'DeletePostFormatPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The ID of the deleted object
   * @deprecated
   */
  readonly deletedId: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated
   */
  readonly postFormat: Maybe<PostFormat>;
}

/** Input for the deleteProductCategory mutation */
export interface DeleteProductCategoryInput {
  readonly clientMutationId: Scalars['String'];
  /** The ID of the productCategory to delete */
  readonly id: Scalars['ID'];
}

/** The payload for the deleteProductCategory mutation */
export interface DeleteProductCategoryPayload {
  readonly __typename: 'DeleteProductCategoryPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The ID of the deleted object
   * @deprecated
   */
  readonly deletedId: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated
   */
  readonly productCategory: Maybe<ProductCategory>;
}

/** Input for the deleteProductTag mutation */
export interface DeleteProductTagInput {
  readonly clientMutationId: Scalars['String'];
  /** The ID of the productTag to delete */
  readonly id: Scalars['ID'];
}

/** The payload for the deleteProductTag mutation */
export interface DeleteProductTagPayload {
  readonly __typename: 'DeleteProductTagPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The ID of the deleted object
   * @deprecated
   */
  readonly deletedId: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated
   */
  readonly productTag: Maybe<ProductTag>;
}

/** Input for the deleteProductType mutation */
export interface DeleteProductTypeInput {
  readonly clientMutationId: Scalars['String'];
  /** The ID of the productType to delete */
  readonly id: Scalars['ID'];
}

/** The payload for the deleteProductType mutation */
export interface DeleteProductTypePayload {
  readonly __typename: 'DeleteProductTypePayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The ID of the deleted object
   * @deprecated
   */
  readonly deletedId: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated
   */
  readonly productType: Maybe<ProductType>;
}

/** Input for the deleteReview mutation */
export interface DeleteReviewInput {
  readonly clientMutationId: Scalars['String'];
  /** Whether the product review should be force deleted instead of being moved to the trash */
  readonly forceDelete: Maybe<Scalars['Boolean']>;
  /** The ID of the target product review */
  readonly id: Scalars['ID'];
}

/** The payload for the deleteReview mutation */
export interface DeleteReviewPayload {
  readonly __typename: 'DeleteReviewPayload';
  /**
   * The affected product review ID
   * @deprecated
   */
  readonly affectedId: Maybe<Scalars['ID']>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The product rating of the affected product review
   * @deprecated
   */
  readonly rating: Maybe<Scalars['Float']>;
  /**
   * The affected product review
   * @deprecated
   */
  readonly review: Maybe<Comment>;
}

/** Input for the deleteShippingClass mutation */
export interface DeleteShippingClassInput {
  readonly clientMutationId: Scalars['String'];
  /** The ID of the shippingClass to delete */
  readonly id: Scalars['ID'];
}

/** The payload for the deleteShippingClass mutation */
export interface DeleteShippingClassPayload {
  readonly __typename: 'DeleteShippingClassPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The ID of the deleted object
   * @deprecated
   */
  readonly deletedId: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated
   */
  readonly shippingClass: Maybe<ShippingClass>;
}

/** Input for the deleteTag mutation */
export interface DeleteTagInput {
  readonly clientMutationId: Scalars['String'];
  /** The ID of the tag to delete */
  readonly id: Scalars['ID'];
}

/** The payload for the deleteTag mutation */
export interface DeleteTagPayload {
  readonly __typename: 'DeleteTagPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The ID of the deleted object
   * @deprecated
   */
  readonly deletedId: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated
   */
  readonly tag: Maybe<Tag>;
}

/** Input for the deleteUser mutation */
export interface DeleteUserInput {
  readonly clientMutationId: Scalars['String'];
  /** The ID of the user you want to delete */
  readonly id: Scalars['ID'];
  /** Reassign posts and links to new User ID. */
  readonly reassignId: Maybe<Scalars['ID']>;
}

/** The payload for the deleteUser mutation */
export interface DeleteUserPayload {
  readonly __typename: 'DeleteUserPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The ID of the user that you just deleted
   * @deprecated
   */
  readonly deletedId: Maybe<Scalars['ID']>;
  /**
   * The deleted user object
   * @deprecated
   */
  readonly user: Maybe<User>;
}

/** Input for the deleteVisibleProduct mutation */
export interface DeleteVisibleProductInput {
  readonly clientMutationId: Scalars['String'];
  /** The ID of the visibleProduct to delete */
  readonly id: Scalars['ID'];
}

/** The payload for the deleteVisibleProduct mutation */
export interface DeleteVisibleProductPayload {
  readonly __typename: 'DeleteVisibleProductPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The ID of the deleted object
   * @deprecated
   */
  readonly deletedId: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated
   */
  readonly visibleProduct: Maybe<VisibleProduct>;
}

/** Input for the emptyCart mutation */
export interface EmptyCartInput {
  readonly clientMutationId: Scalars['String'];
}

/** The payload for the emptyCart mutation */
export interface EmptyCartPayload {
  readonly __typename: 'EmptyCartPayload';
  /** @deprecated  */
  readonly cart: Maybe<Cart>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly deletedCart: Maybe<Cart>;
}

/** Input for the registerCustomer mutation */
export interface RegisterCustomerInput {
  /** User's AOL IM account. */
  readonly aim: Maybe<Scalars['String']>;
  /** Customer billing information */
  readonly billing: Maybe<CustomerAddressInput>;
  readonly clientMutationId: Scalars['String'];
  /** A string containing content about the user. */
  readonly description: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  readonly displayName: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  readonly email: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  readonly firstName: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  readonly jabber: Maybe<Scalars['String']>;
  /** The user's last name. */
  readonly lastName: Maybe<Scalars['String']>;
  /** User's locale. */
  readonly locale: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  readonly nicename: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  readonly nickname: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  readonly password: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  readonly registered: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  readonly richEditing: Maybe<Scalars['String']>;
  /** Customer shipping address */
  readonly shipping: Maybe<CustomerAddressInput>;
  /** Customer shipping is identical to billing address */
  readonly shippingSameAsBilling: Maybe<Scalars['Boolean']>;
  /** A string that contains the user's username. */
  readonly username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  readonly websiteUrl: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  readonly yim: Maybe<Scalars['String']>;
}

/** The payload for the registerCustomer mutation */
export interface RegisterCustomerPayload {
  readonly __typename: 'RegisterCustomerPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly customer: Maybe<Customer>;
  /** @deprecated  */
  readonly viewer: Maybe<User>;
}

/** Input for the registerUser mutation */
export interface RegisterUserInput {
  /** User's AOL IM account. */
  readonly aim: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** A string containing content about the user. */
  readonly description: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  readonly displayName: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  readonly email: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  readonly firstName: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  readonly jabber: Maybe<Scalars['String']>;
  /** The user's last name. */
  readonly lastName: Maybe<Scalars['String']>;
  /** User's locale. */
  readonly locale: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  readonly nicename: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  readonly nickname: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  readonly password: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  readonly registered: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  readonly richEditing: Maybe<Scalars['String']>;
  /** A string that contains the user's username. */
  readonly username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  readonly websiteUrl: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  readonly yim: Maybe<Scalars['String']>;
}

/** The payload for the registerUser mutation */
export interface RegisterUserPayload {
  readonly __typename: 'RegisterUserPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly user: Maybe<User>;
}

/** Input for the removeCoupons mutation */
export interface RemoveCouponsInput {
  readonly clientMutationId: Scalars['String'];
  /** Code of coupon being applied */
  readonly codes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

/** The payload for the removeCoupons mutation */
export interface RemoveCouponsPayload {
  readonly __typename: 'RemoveCouponsPayload';
  /** @deprecated  */
  readonly cart: Maybe<Cart>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
}

/** Input for the removeItemsFromCart mutation */
export interface RemoveItemsFromCartInput {
  /** Remove all cart items */
  readonly all: Maybe<Scalars['Boolean']>;
  readonly clientMutationId: Scalars['String'];
  /** Item keys of the items being removed */
  readonly keys: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
}

/** The payload for the removeItemsFromCart mutation */
export interface RemoveItemsFromCartPayload {
  readonly __typename: 'RemoveItemsFromCartPayload';
  /** @deprecated  */
  readonly cart: Maybe<Cart>;
  /** @deprecated  */
  readonly cartItems: Maybe<ReadonlyArray<Maybe<CartItem>>>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
}

/** Input for the resetUserPassword mutation */
export interface ResetUserPasswordInput {
  readonly clientMutationId: Scalars['String'];
  /** Password reset key */
  readonly key: Maybe<Scalars['String']>;
  /** The user's login (username). */
  readonly login: Maybe<Scalars['String']>;
  /** The new password. */
  readonly password: Maybe<Scalars['String']>;
}

/** The payload for the resetUserPassword mutation */
export interface ResetUserPasswordPayload {
  readonly __typename: 'ResetUserPasswordPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly user: Maybe<User>;
}

/** Input for the restoreCartItems mutation */
export interface RestoreCartItemsInput {
  readonly clientMutationId: Scalars['String'];
  /** Cart item key of the item being removed */
  readonly keys: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
}

/** The payload for the restoreCartItems mutation */
export interface RestoreCartItemsPayload {
  readonly __typename: 'RestoreCartItemsPayload';
  /** @deprecated  */
  readonly cart: Maybe<Cart>;
  /** @deprecated  */
  readonly cartItems: Maybe<ReadonlyArray<Maybe<CartItem>>>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
}

/** Input for the restoreComment mutation */
export interface RestoreCommentInput {
  readonly clientMutationId: Scalars['String'];
  /** The ID of the comment to be restored */
  readonly id: Scalars['ID'];
}

/** The payload for the restoreComment mutation */
export interface RestoreCommentPayload {
  readonly __typename: 'RestoreCommentPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The restored comment object
   * @deprecated
   */
  readonly comment: Maybe<Comment>;
  /**
   * The ID of the restored comment
   * @deprecated
   */
  readonly restoredId: Maybe<Scalars['ID']>;
}

/** Input for the restoreReview mutation */
export interface RestoreReviewInput {
  readonly clientMutationId: Scalars['String'];
  /** The ID of the target product review */
  readonly id: Scalars['ID'];
}

/** The payload for the restoreReview mutation */
export interface RestoreReviewPayload {
  readonly __typename: 'RestoreReviewPayload';
  /**
   * The affected product review ID
   * @deprecated
   */
  readonly affectedId: Maybe<Scalars['ID']>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The product rating of the affected product review
   * @deprecated
   */
  readonly rating: Maybe<Scalars['Float']>;
  /**
   * The affected product review
   * @deprecated
   */
  readonly review: Maybe<Comment>;
}

/** Input for the sendPasswordResetEmail mutation */
export interface SendPasswordResetEmailInput {
  readonly clientMutationId: Scalars['String'];
  /** A string that contains the user's username or email address. */
  readonly username: Scalars['String'];
}

/** The payload for the sendPasswordResetEmail mutation */
export interface SendPasswordResetEmailPayload {
  readonly __typename: 'SendPasswordResetEmailPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The user that the password reset email was sent to
   * @deprecated
   */
  readonly user: Maybe<User>;
}

/** Input for the updateComment mutation */
export interface UpdateCommentInput {
  /** The approval status of the comment. */
  readonly approved: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  readonly author: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  readonly authorEmail: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  readonly authorUrl: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The ID of the post object the comment belongs to. */
  readonly commentOn: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  readonly content: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: Maybe<Scalars['String']>;
  /** The ID of the comment being updated. */
  readonly id: Scalars['ID'];
  /** Parent comment of current comment. */
  readonly parent: Maybe<Scalars['ID']>;
  /** Type of comment. */
  readonly type: Maybe<Scalars['String']>;
}

/** The payload for the updateComment mutation */
export interface UpdateCommentPayload {
  readonly __typename: 'UpdateCommentPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The comment that was created
   * @deprecated
   */
  readonly comment: Maybe<Comment>;
  /**
   * Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache
   * @deprecated
   */
  readonly success: Maybe<Scalars['Boolean']>;
}

/** Input for the updateCustomer mutation */
export interface UpdateCustomerInput {
  /** User's AOL IM account. */
  readonly aim: Maybe<Scalars['String']>;
  /** Customer billing information */
  readonly billing: Maybe<CustomerAddressInput>;
  readonly clientMutationId: Scalars['String'];
  /** A string containing content about the user. */
  readonly description: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  readonly displayName: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  readonly email: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  readonly firstName: Maybe<Scalars['String']>;
  /** The ID of the user */
  readonly id: Maybe<Scalars['ID']>;
  /** User's Jabber account. */
  readonly jabber: Maybe<Scalars['String']>;
  /** The user's last name. */
  readonly lastName: Maybe<Scalars['String']>;
  /** User's locale. */
  readonly locale: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  readonly nicename: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  readonly nickname: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  readonly password: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  readonly registered: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  readonly richEditing: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  readonly roles: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Customer shipping address */
  readonly shipping: Maybe<CustomerAddressInput>;
  /** Customer shipping is identical to billing address */
  readonly shippingSameAsBilling: Maybe<Scalars['Boolean']>;
  /** A string containing the user's URL for the user's web site. */
  readonly websiteUrl: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  readonly yim: Maybe<Scalars['String']>;
}

/** The payload for the updateCustomer mutation */
export interface UpdateCustomerPayload {
  readonly __typename: 'UpdateCustomerPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly customer: Maybe<Customer>;
}

/** Input for the updateItemQuantities mutation */
export interface UpdateItemQuantitiesInput {
  readonly clientMutationId: Scalars['String'];
  /** Cart item being updated */
  readonly items: Maybe<ReadonlyArray<Maybe<CartItemQuantityInput>>>;
}

/** Cart item quantity */
export interface CartItemQuantityInput {
  /** Cart item being updated */
  readonly key: Scalars['ID'];
  /** Cart item's new quantity */
  readonly quantity: Scalars['Int'];
}

/** The payload for the updateItemQuantities mutation */
export interface UpdateItemQuantitiesPayload {
  readonly __typename: 'UpdateItemQuantitiesPayload';
  /** @deprecated  */
  readonly cart: Maybe<Cart>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly items: Maybe<ReadonlyArray<Maybe<CartItem>>>;
  /** @deprecated  */
  readonly removed: Maybe<ReadonlyArray<Maybe<CartItem>>>;
  /** @deprecated  */
  readonly updated: Maybe<ReadonlyArray<Maybe<CartItem>>>;
}

/** Input for the updateMediaItem mutation */
export interface UpdateMediaItemInput {
  /** Alternative text to display when mediaItem is not displayed */
  readonly altText: Maybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  readonly authorId: Maybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  readonly caption: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The comment status for the mediaItem */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** The date of the mediaItem */
  readonly date: Maybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  readonly dateGmt: Maybe<Scalars['String']>;
  /** Description of the mediaItem */
  readonly description: Maybe<Scalars['String']>;
  /** The file name of the mediaItem */
  readonly filePath: Maybe<Scalars['String']>;
  /** The file type of the mediaItem */
  readonly fileType: Maybe<MimeTypeEnum>;
  /** The ID of the mediaItem object */
  readonly id: Scalars['ID'];
  /** The WordPress post ID or the graphQL postId of the parent object */
  readonly parentId: Maybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  readonly pingStatus: Maybe<Scalars['String']>;
  /** The slug of the mediaItem */
  readonly slug: Maybe<Scalars['String']>;
  /** The status of the mediaItem */
  readonly status: Maybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  readonly title: Maybe<Scalars['String']>;
}

/** The payload for the updateMediaItem mutation */
export interface UpdateMediaItemPayload {
  readonly __typename: 'UpdateMediaItemPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly mediaItem: Maybe<MediaItem>;
}

/** Input for the updateOrder mutation */
export interface UpdateOrderInput {
  /** Order billing address */
  readonly billing: Maybe<CustomerAddressInput>;
  readonly clientMutationId: Scalars['String'];
  /** Coupons codes to be applied to order */
  readonly coupons: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Currency the order was created with, in ISO format. */
  readonly currency: Maybe<Scalars['String']>;
  /** Order customer ID */
  readonly customerId: Maybe<Scalars['Int']>;
  /** Note left by customer during checkout. */
  readonly customerNote: Maybe<Scalars['String']>;
  /** Order shipping lines */
  readonly feeLines: Maybe<ReadonlyArray<Maybe<FeeLineInput>>>;
  /** Order global ID */
  readonly id: Maybe<Scalars['ID']>;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  readonly isPaid: Maybe<Scalars['Boolean']>;
  /** Order line items */
  readonly lineItems: Maybe<ReadonlyArray<Maybe<LineItemInput>>>;
  /** Order meta data */
  readonly metaData: Maybe<ReadonlyArray<Maybe<MetaDataInput>>>;
  /** Order WP ID */
  readonly orderId: Maybe<Scalars['Int']>;
  /** Parent order ID. */
  readonly parentId: Maybe<Scalars['Int']>;
  /** Payment method ID. */
  readonly paymentMethod: Maybe<Scalars['String']>;
  /** Payment method title. */
  readonly paymentMethodTitle: Maybe<Scalars['String']>;
  /** Order shipping address */
  readonly shipping: Maybe<CustomerAddressInput>;
  /** Order shipping lines */
  readonly shippingLines: Maybe<ReadonlyArray<Maybe<ShippingLineInput>>>;
  /** Order status */
  readonly status: Maybe<OrderStatusEnum>;
  /** Order transaction ID */
  readonly transactionId: Maybe<Scalars['String']>;
}

/** The payload for the updateOrder mutation */
export interface UpdateOrderPayload {
  readonly __typename: 'UpdateOrderPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly order: Maybe<Order>;
}

/** Input for the updatePage mutation */
export interface UpdatePageInput {
  /** The userId to assign as the author of the object */
  readonly authorId: Maybe<Scalars['ID']>;
  readonly clientMutationId: Scalars['String'];
  /** The comment status for the object */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** The content of the object */
  readonly content: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: Maybe<Scalars['String']>;
  /** The ID of the page object */
  readonly id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  readonly parentId: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  readonly password: Maybe<Scalars['String']>;
  /** The slug of the object */
  readonly slug: Maybe<Scalars['String']>;
  /** The status of the object */
  readonly status: Maybe<PostStatusEnum>;
  /** The title of the object */
  readonly title: Maybe<Scalars['String']>;
}

/** The payload for the updatePage mutation */
export interface UpdatePagePayload {
  readonly __typename: 'UpdatePagePayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly page: Maybe<Page>;
}

/** Input for the updatePost mutation */
export interface UpdatePostInput {
  /** The userId to assign as the author of the object */
  readonly authorId: Maybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  readonly categories: Maybe<PostCategoriesInput>;
  readonly clientMutationId: Scalars['String'];
  /** The comment status for the object */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** The content of the object */
  readonly content: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: Maybe<Scalars['String']>;
  /** The excerpt of the object */
  readonly excerpt: Maybe<Scalars['String']>;
  /** The ID of the post object */
  readonly id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  readonly password: Maybe<Scalars['String']>;
  /** The ping status for the object */
  readonly pingStatus: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  readonly pinged: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  readonly postFormats: Maybe<PostPostFormatsInput>;
  /** The slug of the object */
  readonly slug: Maybe<Scalars['String']>;
  /** The status of the object */
  readonly status: Maybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  readonly tags: Maybe<PostTagsInput>;
  /** The title of the object */
  readonly title: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  readonly toPing: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

/** The payload for the updatePost mutation */
export interface UpdatePostPayload {
  readonly __typename: 'UpdatePostPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly post: Maybe<Post>;
}

/** Input for the updateReview mutation */
export interface UpdateReviewInput {
  /** The approval status of the comment. */
  readonly approved: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  readonly author: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  readonly authorEmail: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  readonly authorUrl: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The ID of the post object the comment belongs to. */
  readonly commentOn: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  readonly content: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: Maybe<Scalars['String']>;
  /** The ID of the review being updated. */
  readonly id: Scalars['ID'];
  /** Parent comment of current comment. */
  readonly parent: Maybe<Scalars['ID']>;
  /** Product rating */
  readonly rating: Scalars['Int'];
}

/** The payload for the updateReview mutation */
export interface UpdateReviewPayload {
  readonly __typename: 'UpdateReviewPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The product rating of the review that was created
   * @deprecated
   */
  readonly rating: Maybe<Scalars['Float']>;
  /**
   * The product review that was created
   * @deprecated
   */
  readonly review: Maybe<Comment>;
}

/** Input for the updateSettings mutation */
export interface UpdateSettingsInput {
  readonly clientMutationId: Scalars['String'];
  /** Allow people to submit comments on new posts. */
  readonly discussionSettingsDefaultCommentStatus: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  readonly discussionSettingsDefaultPingStatus: Maybe<Scalars['String']>;
  /** A date format for all date strings. */
  readonly generalSettingsDateFormat: Maybe<Scalars['String']>;
  /** Site tagline. */
  readonly generalSettingsDescription: Maybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  readonly generalSettingsEmail: Maybe<Scalars['String']>;
  /** WordPress locale code. */
  readonly generalSettingsLanguage: Maybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  readonly generalSettingsStartOfWeek: Maybe<Scalars['Int']>;
  /** A time format for all time strings. */
  readonly generalSettingsTimeFormat: Maybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  readonly generalSettingsTimezone: Maybe<Scalars['String']>;
  /** Site title. */
  readonly generalSettingsTitle: Maybe<Scalars['String']>;
  /** Site URL. */
  readonly generalSettingsUrl: Maybe<Scalars['String']>;
  /** Blog pages show at most. */
  readonly readingSettingsPostsPerPage: Maybe<Scalars['Int']>;
  /** Default post category. */
  readonly writingSettingsDefaultCategory: Maybe<Scalars['Int']>;
  /** Default post format. */
  readonly writingSettingsDefaultPostFormat: Maybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  readonly writingSettingsUseSmilies: Maybe<Scalars['Boolean']>;
}

/** The payload for the updateSettings mutation */
export interface UpdateSettingsPayload {
  readonly __typename: 'UpdateSettingsPayload';
  /** @deprecated  */
  readonly allSettings: Maybe<Settings>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly discussionSettings: Maybe<DiscussionSettings>;
  /** @deprecated  */
  readonly generalSettings: Maybe<GeneralSettings>;
  /** @deprecated  */
  readonly readingSettings: Maybe<ReadingSettings>;
  /** @deprecated  */
  readonly writingSettings: Maybe<WritingSettings>;
}

/** Input for the updateShippingMethod mutation */
export interface UpdateShippingMethodInput {
  readonly clientMutationId: Scalars['String'];
  readonly shippingMethods: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

/** The payload for the updateShippingMethod mutation */
export interface UpdateShippingMethodPayload {
  readonly __typename: 'UpdateShippingMethodPayload';
  /** @deprecated  */
  readonly cart: Maybe<Cart>;
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
}

/** Input for the updateUser mutation */
export interface UpdateUserInput {
  /** User's AOL IM account. */
  readonly aim: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** A string containing content about the user. */
  readonly description: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  readonly displayName: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  readonly email: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  readonly firstName: Maybe<Scalars['String']>;
  /** The ID of the user */
  readonly id: Scalars['ID'];
  /** User's Jabber account. */
  readonly jabber: Maybe<Scalars['String']>;
  /** The user's last name. */
  readonly lastName: Maybe<Scalars['String']>;
  /** User's locale. */
  readonly locale: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  readonly nicename: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  readonly nickname: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  readonly password: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  readonly registered: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  readonly richEditing: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  readonly roles: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** A string containing the user's URL for the user's web site. */
  readonly websiteUrl: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  readonly yim: Maybe<Scalars['String']>;
}

/** The payload for the updateUser mutation */
export interface UpdateUserPayload {
  readonly __typename: 'UpdateUserPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /** @deprecated  */
  readonly user: Maybe<User>;
}

/** Input for the writeReview mutation */
export interface WriteReviewInput {
  /** The approval status of the comment. */
  readonly approved: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  readonly author: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  readonly authorEmail: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  readonly authorUrl: Maybe<Scalars['String']>;
  readonly clientMutationId: Scalars['String'];
  /** The ID of the post object the comment belongs to. */
  readonly commentOn: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  readonly content: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: Maybe<Scalars['String']>;
  /** Parent comment of current comment. */
  readonly parent: Maybe<Scalars['ID']>;
  /** Product rating */
  readonly rating: Scalars['Int'];
}

/** The payload for the writeReview mutation */
export interface WriteReviewPayload {
  readonly __typename: 'WriteReviewPayload';
  /** @deprecated  */
  readonly clientMutationId: Scalars['String'];
  /**
   * The product rating of the review that was created
   * @deprecated
   */
  readonly rating: Maybe<Scalars['Float']>;
  /**
   * The product review that was created
   * @deprecated
   */
  readonly review: Maybe<Comment>;
}

/** A Comment Author object */
export interface CommentAuthor extends Node, Commenter {
  readonly __typename: 'CommentAuthor';
  /**
   * Identifies the primary key from the database.
   * @deprecated
   */
  readonly databaseId: Scalars['Int'];
  /**
   * The email for the comment author
   * @deprecated
   */
  readonly email: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the comment author object
   * @deprecated
   */
  readonly id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /**
   * The name for the comment author.
   * @deprecated
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * The url the comment author.
   * @deprecated
   */
  readonly url: Maybe<Scalars['String']>;
}

/** Available timezones */
export enum TimezoneEnum {
  /** Abidjan */
  AfricaAbidjan = 'AFRICA_ABIDJAN',
  /** Accra */
  AfricaAccra = 'AFRICA_ACCRA',
  /** Addis Ababa */
  AfricaAddisAbaba = 'AFRICA_ADDIS_ABABA',
  /** Algiers */
  AfricaAlgiers = 'AFRICA_ALGIERS',
  /** Asmara */
  AfricaAsmara = 'AFRICA_ASMARA',
  /** Bamako */
  AfricaBamako = 'AFRICA_BAMAKO',
  /** Bangui */
  AfricaBangui = 'AFRICA_BANGUI',
  /** Banjul */
  AfricaBanjul = 'AFRICA_BANJUL',
  /** Bissau */
  AfricaBissau = 'AFRICA_BISSAU',
  /** Blantyre */
  AfricaBlantyre = 'AFRICA_BLANTYRE',
  /** Brazzaville */
  AfricaBrazzaville = 'AFRICA_BRAZZAVILLE',
  /** Bujumbura */
  AfricaBujumbura = 'AFRICA_BUJUMBURA',
  /** Cairo */
  AfricaCairo = 'AFRICA_CAIRO',
  /** Casablanca */
  AfricaCasablanca = 'AFRICA_CASABLANCA',
  /** Ceuta */
  AfricaCeuta = 'AFRICA_CEUTA',
  /** Conakry */
  AfricaConakry = 'AFRICA_CONAKRY',
  /** Dakar */
  AfricaDakar = 'AFRICA_DAKAR',
  /** Dar es Salaam */
  AfricaDarEsSalaam = 'AFRICA_DAR_ES_SALAAM',
  /** Djibouti */
  AfricaDjibouti = 'AFRICA_DJIBOUTI',
  /** Douala */
  AfricaDouala = 'AFRICA_DOUALA',
  /** El Aaiun */
  AfricaElAaiun = 'AFRICA_EL_AAIUN',
  /** Freetown */
  AfricaFreetown = 'AFRICA_FREETOWN',
  /** Gaborone */
  AfricaGaborone = 'AFRICA_GABORONE',
  /** Harare */
  AfricaHarare = 'AFRICA_HARARE',
  /** Johannesburg */
  AfricaJohannesburg = 'AFRICA_JOHANNESBURG',
  /** Juba */
  AfricaJuba = 'AFRICA_JUBA',
  /** Kampala */
  AfricaKampala = 'AFRICA_KAMPALA',
  /** Khartoum */
  AfricaKhartoum = 'AFRICA_KHARTOUM',
  /** Kigali */
  AfricaKigali = 'AFRICA_KIGALI',
  /** Kinshasa */
  AfricaKinshasa = 'AFRICA_KINSHASA',
  /** Lagos */
  AfricaLagos = 'AFRICA_LAGOS',
  /** Libreville */
  AfricaLibreville = 'AFRICA_LIBREVILLE',
  /** Lome */
  AfricaLome = 'AFRICA_LOME',
  /** Luanda */
  AfricaLuanda = 'AFRICA_LUANDA',
  /** Lubumbashi */
  AfricaLubumbashi = 'AFRICA_LUBUMBASHI',
  /** Lusaka */
  AfricaLusaka = 'AFRICA_LUSAKA',
  /** Malabo */
  AfricaMalabo = 'AFRICA_MALABO',
  /** Maputo */
  AfricaMaputo = 'AFRICA_MAPUTO',
  /** Maseru */
  AfricaMaseru = 'AFRICA_MASERU',
  /** Mbabane */
  AfricaMbabane = 'AFRICA_MBABANE',
  /** Mogadishu */
  AfricaMogadishu = 'AFRICA_MOGADISHU',
  /** Monrovia */
  AfricaMonrovia = 'AFRICA_MONROVIA',
  /** Nairobi */
  AfricaNairobi = 'AFRICA_NAIROBI',
  /** Ndjamena */
  AfricaNdjamena = 'AFRICA_NDJAMENA',
  /** Niamey */
  AfricaNiamey = 'AFRICA_NIAMEY',
  /** Nouakchott */
  AfricaNouakchott = 'AFRICA_NOUAKCHOTT',
  /** Ouagadougou */
  AfricaOuagadougou = 'AFRICA_OUAGADOUGOU',
  /** Porto-Novo */
  AfricaPortoNovo = 'AFRICA_PORTO_NOVO',
  /** Sao Tome */
  AfricaSaoTome = 'AFRICA_SAO_TOME',
  /** Tripoli */
  AfricaTripoli = 'AFRICA_TRIPOLI',
  /** Tunis */
  AfricaTunis = 'AFRICA_TUNIS',
  /** Windhoek */
  AfricaWindhoek = 'AFRICA_WINDHOEK',
  /** Adak */
  AmericaAdak = 'AMERICA_ADAK',
  /** Anchorage */
  AmericaAnchorage = 'AMERICA_ANCHORAGE',
  /** Anguilla */
  AmericaAnguilla = 'AMERICA_ANGUILLA',
  /** Antigua */
  AmericaAntigua = 'AMERICA_ANTIGUA',
  /** Araguaina */
  AmericaAraguaina = 'AMERICA_ARAGUAINA',
  /** Argentina - Buenos Aires */
  AmericaArgentinaBuenosAires = 'AMERICA_ARGENTINA_BUENOS_AIRES',
  /** Argentina - Catamarca */
  AmericaArgentinaCatamarca = 'AMERICA_ARGENTINA_CATAMARCA',
  /** Argentina - Cordoba */
  AmericaArgentinaCordoba = 'AMERICA_ARGENTINA_CORDOBA',
  /** Argentina - Jujuy */
  AmericaArgentinaJujuy = 'AMERICA_ARGENTINA_JUJUY',
  /** Argentina - La Rioja */
  AmericaArgentinaLaRioja = 'AMERICA_ARGENTINA_LA_RIOJA',
  /** Argentina - Mendoza */
  AmericaArgentinaMendoza = 'AMERICA_ARGENTINA_MENDOZA',
  /** Argentina - Rio Gallegos */
  AmericaArgentinaRioGallegos = 'AMERICA_ARGENTINA_RIO_GALLEGOS',
  /** Argentina - Salta */
  AmericaArgentinaSalta = 'AMERICA_ARGENTINA_SALTA',
  /** Argentina - San Juan */
  AmericaArgentinaSanJuan = 'AMERICA_ARGENTINA_SAN_JUAN',
  /** Argentina - San Luis */
  AmericaArgentinaSanLuis = 'AMERICA_ARGENTINA_SAN_LUIS',
  /** Argentina - Tucuman */
  AmericaArgentinaTucuman = 'AMERICA_ARGENTINA_TUCUMAN',
  /** Argentina - Ushuaia */
  AmericaArgentinaUshuaia = 'AMERICA_ARGENTINA_USHUAIA',
  /** Aruba */
  AmericaAruba = 'AMERICA_ARUBA',
  /** Asuncion */
  AmericaAsuncion = 'AMERICA_ASUNCION',
  /** Atikokan */
  AmericaAtikokan = 'AMERICA_ATIKOKAN',
  /** Bahia */
  AmericaBahia = 'AMERICA_BAHIA',
  /** Bahia Banderas */
  AmericaBahiaBanderas = 'AMERICA_BAHIA_BANDERAS',
  /** Barbados */
  AmericaBarbados = 'AMERICA_BARBADOS',
  /** Belem */
  AmericaBelem = 'AMERICA_BELEM',
  /** Belize */
  AmericaBelize = 'AMERICA_BELIZE',
  /** Blanc-Sablon */
  AmericaBlancSablon = 'AMERICA_BLANC_SABLON',
  /** Boa Vista */
  AmericaBoaVista = 'AMERICA_BOA_VISTA',
  /** Bogota */
  AmericaBogota = 'AMERICA_BOGOTA',
  /** Boise */
  AmericaBoise = 'AMERICA_BOISE',
  /** Cambridge Bay */
  AmericaCambridgeBay = 'AMERICA_CAMBRIDGE_BAY',
  /** Campo Grande */
  AmericaCampoGrande = 'AMERICA_CAMPO_GRANDE',
  /** Cancun */
  AmericaCancun = 'AMERICA_CANCUN',
  /** Caracas */
  AmericaCaracas = 'AMERICA_CARACAS',
  /** Cayenne */
  AmericaCayenne = 'AMERICA_CAYENNE',
  /** Cayman */
  AmericaCayman = 'AMERICA_CAYMAN',
  /** Chicago */
  AmericaChicago = 'AMERICA_CHICAGO',
  /** Chihuahua */
  AmericaChihuahua = 'AMERICA_CHIHUAHUA',
  /** Costa Rica */
  AmericaCostaRica = 'AMERICA_COSTA_RICA',
  /** Creston */
  AmericaCreston = 'AMERICA_CRESTON',
  /** Cuiaba */
  AmericaCuiaba = 'AMERICA_CUIABA',
  /** Curacao */
  AmericaCuracao = 'AMERICA_CURACAO',
  /** Danmarkshavn */
  AmericaDanmarkshavn = 'AMERICA_DANMARKSHAVN',
  /** Dawson */
  AmericaDawson = 'AMERICA_DAWSON',
  /** Dawson Creek */
  AmericaDawsonCreek = 'AMERICA_DAWSON_CREEK',
  /** Denver */
  AmericaDenver = 'AMERICA_DENVER',
  /** Detroit */
  AmericaDetroit = 'AMERICA_DETROIT',
  /** Dominica */
  AmericaDominica = 'AMERICA_DOMINICA',
  /** Edmonton */
  AmericaEdmonton = 'AMERICA_EDMONTON',
  /** Eirunepe */
  AmericaEirunepe = 'AMERICA_EIRUNEPE',
  /** El Salvador */
  AmericaElSalvador = 'AMERICA_EL_SALVADOR',
  /** Fortaleza */
  AmericaFortaleza = 'AMERICA_FORTALEZA',
  /** Fort Nelson */
  AmericaFortNelson = 'AMERICA_FORT_NELSON',
  /** Glace Bay */
  AmericaGlaceBay = 'AMERICA_GLACE_BAY',
  /** Goose Bay */
  AmericaGooseBay = 'AMERICA_GOOSE_BAY',
  /** Grand Turk */
  AmericaGrandTurk = 'AMERICA_GRAND_TURK',
  /** Grenada */
  AmericaGrenada = 'AMERICA_GRENADA',
  /** Guadeloupe */
  AmericaGuadeloupe = 'AMERICA_GUADELOUPE',
  /** Guatemala */
  AmericaGuatemala = 'AMERICA_GUATEMALA',
  /** Guayaquil */
  AmericaGuayaquil = 'AMERICA_GUAYAQUIL',
  /** Guyana */
  AmericaGuyana = 'AMERICA_GUYANA',
  /** Halifax */
  AmericaHalifax = 'AMERICA_HALIFAX',
  /** Havana */
  AmericaHavana = 'AMERICA_HAVANA',
  /** Hermosillo */
  AmericaHermosillo = 'AMERICA_HERMOSILLO',
  /** Indiana - Indianapolis */
  AmericaIndianaIndianapolis = 'AMERICA_INDIANA_INDIANAPOLIS',
  /** Indiana - Knox */
  AmericaIndianaKnox = 'AMERICA_INDIANA_KNOX',
  /** Indiana - Marengo */
  AmericaIndianaMarengo = 'AMERICA_INDIANA_MARENGO',
  /** Indiana - Petersburg */
  AmericaIndianaPetersburg = 'AMERICA_INDIANA_PETERSBURG',
  /** Indiana - Tell City */
  AmericaIndianaTellCity = 'AMERICA_INDIANA_TELL_CITY',
  /** Indiana - Vevay */
  AmericaIndianaVevay = 'AMERICA_INDIANA_VEVAY',
  /** Indiana - Vincennes */
  AmericaIndianaVincennes = 'AMERICA_INDIANA_VINCENNES',
  /** Indiana - Winamac */
  AmericaIndianaWinamac = 'AMERICA_INDIANA_WINAMAC',
  /** Inuvik */
  AmericaInuvik = 'AMERICA_INUVIK',
  /** Iqaluit */
  AmericaIqaluit = 'AMERICA_IQALUIT',
  /** Jamaica */
  AmericaJamaica = 'AMERICA_JAMAICA',
  /** Juneau */
  AmericaJuneau = 'AMERICA_JUNEAU',
  /** Kentucky - Louisville */
  AmericaKentuckyLouisville = 'AMERICA_KENTUCKY_LOUISVILLE',
  /** Kentucky - Monticello */
  AmericaKentuckyMonticello = 'AMERICA_KENTUCKY_MONTICELLO',
  /** Kralendijk */
  AmericaKralendijk = 'AMERICA_KRALENDIJK',
  /** La Paz */
  AmericaLaPaz = 'AMERICA_LA_PAZ',
  /** Lima */
  AmericaLima = 'AMERICA_LIMA',
  /** Los Angeles */
  AmericaLosAngeles = 'AMERICA_LOS_ANGELES',
  /** Lower Princes */
  AmericaLowerPrinces = 'AMERICA_LOWER_PRINCES',
  /** Maceio */
  AmericaMaceio = 'AMERICA_MACEIO',
  /** Managua */
  AmericaManagua = 'AMERICA_MANAGUA',
  /** Manaus */
  AmericaManaus = 'AMERICA_MANAUS',
  /** Marigot */
  AmericaMarigot = 'AMERICA_MARIGOT',
  /** Martinique */
  AmericaMartinique = 'AMERICA_MARTINIQUE',
  /** Matamoros */
  AmericaMatamoros = 'AMERICA_MATAMOROS',
  /** Mazatlan */
  AmericaMazatlan = 'AMERICA_MAZATLAN',
  /** Menominee */
  AmericaMenominee = 'AMERICA_MENOMINEE',
  /** Merida */
  AmericaMerida = 'AMERICA_MERIDA',
  /** Metlakatla */
  AmericaMetlakatla = 'AMERICA_METLAKATLA',
  /** Mexico City */
  AmericaMexicoCity = 'AMERICA_MEXICO_CITY',
  /** Miquelon */
  AmericaMiquelon = 'AMERICA_MIQUELON',
  /** Moncton */
  AmericaMoncton = 'AMERICA_MONCTON',
  /** Monterrey */
  AmericaMonterrey = 'AMERICA_MONTERREY',
  /** Montevideo */
  AmericaMontevideo = 'AMERICA_MONTEVIDEO',
  /** Montserrat */
  AmericaMontserrat = 'AMERICA_MONTSERRAT',
  /** Nassau */
  AmericaNassau = 'AMERICA_NASSAU',
  /** New York */
  AmericaNewYork = 'AMERICA_NEW_YORK',
  /** Nipigon */
  AmericaNipigon = 'AMERICA_NIPIGON',
  /** Nome */
  AmericaNome = 'AMERICA_NOME',
  /** Noronha */
  AmericaNoronha = 'AMERICA_NORONHA',
  /** North Dakota - Beulah */
  AmericaNorthDakotaBeulah = 'AMERICA_NORTH_DAKOTA_BEULAH',
  /** North Dakota - Center */
  AmericaNorthDakotaCenter = 'AMERICA_NORTH_DAKOTA_CENTER',
  /** North Dakota - New Salem */
  AmericaNorthDakotaNewSalem = 'AMERICA_NORTH_DAKOTA_NEW_SALEM',
  /** Nuuk */
  AmericaNuuk = 'AMERICA_NUUK',
  /** Ojinaga */
  AmericaOjinaga = 'AMERICA_OJINAGA',
  /** Panama */
  AmericaPanama = 'AMERICA_PANAMA',
  /** Pangnirtung */
  AmericaPangnirtung = 'AMERICA_PANGNIRTUNG',
  /** Paramaribo */
  AmericaParamaribo = 'AMERICA_PARAMARIBO',
  /** Phoenix */
  AmericaPhoenix = 'AMERICA_PHOENIX',
  /** Porto Velho */
  AmericaPortoVelho = 'AMERICA_PORTO_VELHO',
  /** Port-au-Prince */
  AmericaPortAuPrince = 'AMERICA_PORT_AU_PRINCE',
  /** Port of Spain */
  AmericaPortOfSpain = 'AMERICA_PORT_OF_SPAIN',
  /** Puerto Rico */
  AmericaPuertoRico = 'AMERICA_PUERTO_RICO',
  /** Punta Arenas */
  AmericaPuntaArenas = 'AMERICA_PUNTA_ARENAS',
  /** Rainy River */
  AmericaRainyRiver = 'AMERICA_RAINY_RIVER',
  /** Rankin Inlet */
  AmericaRankinInlet = 'AMERICA_RANKIN_INLET',
  /** Recife */
  AmericaRecife = 'AMERICA_RECIFE',
  /** Regina */
  AmericaRegina = 'AMERICA_REGINA',
  /** Resolute */
  AmericaResolute = 'AMERICA_RESOLUTE',
  /** Rio Branco */
  AmericaRioBranco = 'AMERICA_RIO_BRANCO',
  /** Santarem */
  AmericaSantarem = 'AMERICA_SANTAREM',
  /** Santiago */
  AmericaSantiago = 'AMERICA_SANTIAGO',
  /** Santo Domingo */
  AmericaSantoDomingo = 'AMERICA_SANTO_DOMINGO',
  /** Sao Paulo */
  AmericaSaoPaulo = 'AMERICA_SAO_PAULO',
  /** Scoresbysund */
  AmericaScoresbysund = 'AMERICA_SCORESBYSUND',
  /** Sitka */
  AmericaSitka = 'AMERICA_SITKA',
  /** St Barthelemy */
  AmericaStBarthelemy = 'AMERICA_ST_BARTHELEMY',
  /** St Johns */
  AmericaStJohns = 'AMERICA_ST_JOHNS',
  /** St Kitts */
  AmericaStKitts = 'AMERICA_ST_KITTS',
  /** St Lucia */
  AmericaStLucia = 'AMERICA_ST_LUCIA',
  /** St Thomas */
  AmericaStThomas = 'AMERICA_ST_THOMAS',
  /** St Vincent */
  AmericaStVincent = 'AMERICA_ST_VINCENT',
  /** Swift Current */
  AmericaSwiftCurrent = 'AMERICA_SWIFT_CURRENT',
  /** Tegucigalpa */
  AmericaTegucigalpa = 'AMERICA_TEGUCIGALPA',
  /** Thule */
  AmericaThule = 'AMERICA_THULE',
  /** Thunder Bay */
  AmericaThunderBay = 'AMERICA_THUNDER_BAY',
  /** Tijuana */
  AmericaTijuana = 'AMERICA_TIJUANA',
  /** Toronto */
  AmericaToronto = 'AMERICA_TORONTO',
  /** Tortola */
  AmericaTortola = 'AMERICA_TORTOLA',
  /** Vancouver */
  AmericaVancouver = 'AMERICA_VANCOUVER',
  /** Whitehorse */
  AmericaWhitehorse = 'AMERICA_WHITEHORSE',
  /** Winnipeg */
  AmericaWinnipeg = 'AMERICA_WINNIPEG',
  /** Yakutat */
  AmericaYakutat = 'AMERICA_YAKUTAT',
  /** Yellowknife */
  AmericaYellowknife = 'AMERICA_YELLOWKNIFE',
  /** Casey */
  AntarcticaCasey = 'ANTARCTICA_CASEY',
  /** Davis */
  AntarcticaDavis = 'ANTARCTICA_DAVIS',
  /** DumontDUrville */
  AntarcticaDumontdurville = 'ANTARCTICA_DUMONTDURVILLE',
  /** Macquarie */
  AntarcticaMacquarie = 'ANTARCTICA_MACQUARIE',
  /** Mawson */
  AntarcticaMawson = 'ANTARCTICA_MAWSON',
  /** McMurdo */
  AntarcticaMcmurdo = 'ANTARCTICA_MCMURDO',
  /** Palmer */
  AntarcticaPalmer = 'ANTARCTICA_PALMER',
  /** Rothera */
  AntarcticaRothera = 'ANTARCTICA_ROTHERA',
  /** Syowa */
  AntarcticaSyowa = 'ANTARCTICA_SYOWA',
  /** Troll */
  AntarcticaTroll = 'ANTARCTICA_TROLL',
  /** Vostok */
  AntarcticaVostok = 'ANTARCTICA_VOSTOK',
  /** Longyearbyen */
  ArcticLongyearbyen = 'ARCTIC_LONGYEARBYEN',
  /** Aden */
  AsiaAden = 'ASIA_ADEN',
  /** Almaty */
  AsiaAlmaty = 'ASIA_ALMATY',
  /** Amman */
  AsiaAmman = 'ASIA_AMMAN',
  /** Anadyr */
  AsiaAnadyr = 'ASIA_ANADYR',
  /** Aqtau */
  AsiaAqtau = 'ASIA_AQTAU',
  /** Aqtobe */
  AsiaAqtobe = 'ASIA_AQTOBE',
  /** Ashgabat */
  AsiaAshgabat = 'ASIA_ASHGABAT',
  /** Atyrau */
  AsiaAtyrau = 'ASIA_ATYRAU',
  /** Baghdad */
  AsiaBaghdad = 'ASIA_BAGHDAD',
  /** Bahrain */
  AsiaBahrain = 'ASIA_BAHRAIN',
  /** Baku */
  AsiaBaku = 'ASIA_BAKU',
  /** Bangkok */
  AsiaBangkok = 'ASIA_BANGKOK',
  /** Barnaul */
  AsiaBarnaul = 'ASIA_BARNAUL',
  /** Beirut */
  AsiaBeirut = 'ASIA_BEIRUT',
  /** Bishkek */
  AsiaBishkek = 'ASIA_BISHKEK',
  /** Brunei */
  AsiaBrunei = 'ASIA_BRUNEI',
  /** Chita */
  AsiaChita = 'ASIA_CHITA',
  /** Choibalsan */
  AsiaChoibalsan = 'ASIA_CHOIBALSAN',
  /** Colombo */
  AsiaColombo = 'ASIA_COLOMBO',
  /** Damascus */
  AsiaDamascus = 'ASIA_DAMASCUS',
  /** Dhaka */
  AsiaDhaka = 'ASIA_DHAKA',
  /** Dili */
  AsiaDili = 'ASIA_DILI',
  /** Dubai */
  AsiaDubai = 'ASIA_DUBAI',
  /** Dushanbe */
  AsiaDushanbe = 'ASIA_DUSHANBE',
  /** Famagusta */
  AsiaFamagusta = 'ASIA_FAMAGUSTA',
  /** Gaza */
  AsiaGaza = 'ASIA_GAZA',
  /** Hebron */
  AsiaHebron = 'ASIA_HEBRON',
  /** Hong Kong */
  AsiaHongKong = 'ASIA_HONG_KONG',
  /** Hovd */
  AsiaHovd = 'ASIA_HOVD',
  /** Ho Chi Minh */
  AsiaHoChiMinh = 'ASIA_HO_CHI_MINH',
  /** Irkutsk */
  AsiaIrkutsk = 'ASIA_IRKUTSK',
  /** Jakarta */
  AsiaJakarta = 'ASIA_JAKARTA',
  /** Jayapura */
  AsiaJayapura = 'ASIA_JAYAPURA',
  /** Jerusalem */
  AsiaJerusalem = 'ASIA_JERUSALEM',
  /** Kabul */
  AsiaKabul = 'ASIA_KABUL',
  /** Kamchatka */
  AsiaKamchatka = 'ASIA_KAMCHATKA',
  /** Karachi */
  AsiaKarachi = 'ASIA_KARACHI',
  /** Kathmandu */
  AsiaKathmandu = 'ASIA_KATHMANDU',
  /** Khandyga */
  AsiaKhandyga = 'ASIA_KHANDYGA',
  /** Kolkata */
  AsiaKolkata = 'ASIA_KOLKATA',
  /** Krasnoyarsk */
  AsiaKrasnoyarsk = 'ASIA_KRASNOYARSK',
  /** Kuala Lumpur */
  AsiaKualaLumpur = 'ASIA_KUALA_LUMPUR',
  /** Kuching */
  AsiaKuching = 'ASIA_KUCHING',
  /** Kuwait */
  AsiaKuwait = 'ASIA_KUWAIT',
  /** Macau */
  AsiaMacau = 'ASIA_MACAU',
  /** Magadan */
  AsiaMagadan = 'ASIA_MAGADAN',
  /** Makassar */
  AsiaMakassar = 'ASIA_MAKASSAR',
  /** Manila */
  AsiaManila = 'ASIA_MANILA',
  /** Muscat */
  AsiaMuscat = 'ASIA_MUSCAT',
  /** Nicosia */
  AsiaNicosia = 'ASIA_NICOSIA',
  /** Novokuznetsk */
  AsiaNovokuznetsk = 'ASIA_NOVOKUZNETSK',
  /** Novosibirsk */
  AsiaNovosibirsk = 'ASIA_NOVOSIBIRSK',
  /** Omsk */
  AsiaOmsk = 'ASIA_OMSK',
  /** Oral */
  AsiaOral = 'ASIA_ORAL',
  /** Phnom Penh */
  AsiaPhnomPenh = 'ASIA_PHNOM_PENH',
  /** Pontianak */
  AsiaPontianak = 'ASIA_PONTIANAK',
  /** Pyongyang */
  AsiaPyongyang = 'ASIA_PYONGYANG',
  /** Qatar */
  AsiaQatar = 'ASIA_QATAR',
  /** Qostanay */
  AsiaQostanay = 'ASIA_QOSTANAY',
  /** Qyzylorda */
  AsiaQyzylorda = 'ASIA_QYZYLORDA',
  /** Riyadh */
  AsiaRiyadh = 'ASIA_RIYADH',
  /** Sakhalin */
  AsiaSakhalin = 'ASIA_SAKHALIN',
  /** Samarkand */
  AsiaSamarkand = 'ASIA_SAMARKAND',
  /** Seoul */
  AsiaSeoul = 'ASIA_SEOUL',
  /** Shanghai */
  AsiaShanghai = 'ASIA_SHANGHAI',
  /** Singapore */
  AsiaSingapore = 'ASIA_SINGAPORE',
  /** Srednekolymsk */
  AsiaSrednekolymsk = 'ASIA_SREDNEKOLYMSK',
  /** Taipei */
  AsiaTaipei = 'ASIA_TAIPEI',
  /** Tashkent */
  AsiaTashkent = 'ASIA_TASHKENT',
  /** Tbilisi */
  AsiaTbilisi = 'ASIA_TBILISI',
  /** Tehran */
  AsiaTehran = 'ASIA_TEHRAN',
  /** Thimphu */
  AsiaThimphu = 'ASIA_THIMPHU',
  /** Tokyo */
  AsiaTokyo = 'ASIA_TOKYO',
  /** Tomsk */
  AsiaTomsk = 'ASIA_TOMSK',
  /** Ulaanbaatar */
  AsiaUlaanbaatar = 'ASIA_ULAANBAATAR',
  /** Urumqi */
  AsiaUrumqi = 'ASIA_URUMQI',
  /** Ust-Nera */
  AsiaUstNera = 'ASIA_UST_NERA',
  /** Vientiane */
  AsiaVientiane = 'ASIA_VIENTIANE',
  /** Vladivostok */
  AsiaVladivostok = 'ASIA_VLADIVOSTOK',
  /** Yakutsk */
  AsiaYakutsk = 'ASIA_YAKUTSK',
  /** Yangon */
  AsiaYangon = 'ASIA_YANGON',
  /** Yekaterinburg */
  AsiaYekaterinburg = 'ASIA_YEKATERINBURG',
  /** Yerevan */
  AsiaYerevan = 'ASIA_YEREVAN',
  /** Azores */
  AtlanticAzores = 'ATLANTIC_AZORES',
  /** Bermuda */
  AtlanticBermuda = 'ATLANTIC_BERMUDA',
  /** Canary */
  AtlanticCanary = 'ATLANTIC_CANARY',
  /** Cape Verde */
  AtlanticCapeVerde = 'ATLANTIC_CAPE_VERDE',
  /** Faroe */
  AtlanticFaroe = 'ATLANTIC_FAROE',
  /** Madeira */
  AtlanticMadeira = 'ATLANTIC_MADEIRA',
  /** Reykjavik */
  AtlanticReykjavik = 'ATLANTIC_REYKJAVIK',
  /** South Georgia */
  AtlanticSouthGeorgia = 'ATLANTIC_SOUTH_GEORGIA',
  /** Stanley */
  AtlanticStanley = 'ATLANTIC_STANLEY',
  /** St Helena */
  AtlanticStHelena = 'ATLANTIC_ST_HELENA',
  /** Adelaide */
  AustraliaAdelaide = 'AUSTRALIA_ADELAIDE',
  /** Brisbane */
  AustraliaBrisbane = 'AUSTRALIA_BRISBANE',
  /** Broken Hill */
  AustraliaBrokenHill = 'AUSTRALIA_BROKEN_HILL',
  /** Currie */
  AustraliaCurrie = 'AUSTRALIA_CURRIE',
  /** Darwin */
  AustraliaDarwin = 'AUSTRALIA_DARWIN',
  /** Eucla */
  AustraliaEucla = 'AUSTRALIA_EUCLA',
  /** Hobart */
  AustraliaHobart = 'AUSTRALIA_HOBART',
  /** Lindeman */
  AustraliaLindeman = 'AUSTRALIA_LINDEMAN',
  /** Lord Howe */
  AustraliaLordHowe = 'AUSTRALIA_LORD_HOWE',
  /** Melbourne */
  AustraliaMelbourne = 'AUSTRALIA_MELBOURNE',
  /** Perth */
  AustraliaPerth = 'AUSTRALIA_PERTH',
  /** Sydney */
  AustraliaSydney = 'AUSTRALIA_SYDNEY',
  /** Amsterdam */
  EuropeAmsterdam = 'EUROPE_AMSTERDAM',
  /** Andorra */
  EuropeAndorra = 'EUROPE_ANDORRA',
  /** Astrakhan */
  EuropeAstrakhan = 'EUROPE_ASTRAKHAN',
  /** Athens */
  EuropeAthens = 'EUROPE_ATHENS',
  /** Belgrade */
  EuropeBelgrade = 'EUROPE_BELGRADE',
  /** Berlin */
  EuropeBerlin = 'EUROPE_BERLIN',
  /** Bratislava */
  EuropeBratislava = 'EUROPE_BRATISLAVA',
  /** Brussels */
  EuropeBrussels = 'EUROPE_BRUSSELS',
  /** Bucharest */
  EuropeBucharest = 'EUROPE_BUCHAREST',
  /** Budapest */
  EuropeBudapest = 'EUROPE_BUDAPEST',
  /** Busingen */
  EuropeBusingen = 'EUROPE_BUSINGEN',
  /** Chisinau */
  EuropeChisinau = 'EUROPE_CHISINAU',
  /** Copenhagen */
  EuropeCopenhagen = 'EUROPE_COPENHAGEN',
  /** Dublin */
  EuropeDublin = 'EUROPE_DUBLIN',
  /** Gibraltar */
  EuropeGibraltar = 'EUROPE_GIBRALTAR',
  /** Guernsey */
  EuropeGuernsey = 'EUROPE_GUERNSEY',
  /** Helsinki */
  EuropeHelsinki = 'EUROPE_HELSINKI',
  /** Isle of Man */
  EuropeIsleOfMan = 'EUROPE_ISLE_OF_MAN',
  /** Istanbul */
  EuropeIstanbul = 'EUROPE_ISTANBUL',
  /** Jersey */
  EuropeJersey = 'EUROPE_JERSEY',
  /** Kaliningrad */
  EuropeKaliningrad = 'EUROPE_KALININGRAD',
  /** Kiev */
  EuropeKiev = 'EUROPE_KIEV',
  /** Kirov */
  EuropeKirov = 'EUROPE_KIROV',
  /** Lisbon */
  EuropeLisbon = 'EUROPE_LISBON',
  /** Ljubljana */
  EuropeLjubljana = 'EUROPE_LJUBLJANA',
  /** London */
  EuropeLondon = 'EUROPE_LONDON',
  /** Luxembourg */
  EuropeLuxembourg = 'EUROPE_LUXEMBOURG',
  /** Madrid */
  EuropeMadrid = 'EUROPE_MADRID',
  /** Malta */
  EuropeMalta = 'EUROPE_MALTA',
  /** Mariehamn */
  EuropeMariehamn = 'EUROPE_MARIEHAMN',
  /** Minsk */
  EuropeMinsk = 'EUROPE_MINSK',
  /** Monaco */
  EuropeMonaco = 'EUROPE_MONACO',
  /** Moscow */
  EuropeMoscow = 'EUROPE_MOSCOW',
  /** Oslo */
  EuropeOslo = 'EUROPE_OSLO',
  /** Paris */
  EuropeParis = 'EUROPE_PARIS',
  /** Podgorica */
  EuropePodgorica = 'EUROPE_PODGORICA',
  /** Prague */
  EuropePrague = 'EUROPE_PRAGUE',
  /** Riga */
  EuropeRiga = 'EUROPE_RIGA',
  /** Rome */
  EuropeRome = 'EUROPE_ROME',
  /** Samara */
  EuropeSamara = 'EUROPE_SAMARA',
  /** San Marino */
  EuropeSanMarino = 'EUROPE_SAN_MARINO',
  /** Sarajevo */
  EuropeSarajevo = 'EUROPE_SARAJEVO',
  /** Saratov */
  EuropeSaratov = 'EUROPE_SARATOV',
  /** Simferopol */
  EuropeSimferopol = 'EUROPE_SIMFEROPOL',
  /** Skopje */
  EuropeSkopje = 'EUROPE_SKOPJE',
  /** Sofia */
  EuropeSofia = 'EUROPE_SOFIA',
  /** Stockholm */
  EuropeStockholm = 'EUROPE_STOCKHOLM',
  /** Tallinn */
  EuropeTallinn = 'EUROPE_TALLINN',
  /** Tirane */
  EuropeTirane = 'EUROPE_TIRANE',
  /** Ulyanovsk */
  EuropeUlyanovsk = 'EUROPE_ULYANOVSK',
  /** Uzhgorod */
  EuropeUzhgorod = 'EUROPE_UZHGOROD',
  /** Vaduz */
  EuropeVaduz = 'EUROPE_VADUZ',
  /** Vatican */
  EuropeVatican = 'EUROPE_VATICAN',
  /** Vienna */
  EuropeVienna = 'EUROPE_VIENNA',
  /** Vilnius */
  EuropeVilnius = 'EUROPE_VILNIUS',
  /** Volgograd */
  EuropeVolgograd = 'EUROPE_VOLGOGRAD',
  /** Warsaw */
  EuropeWarsaw = 'EUROPE_WARSAW',
  /** Zagreb */
  EuropeZagreb = 'EUROPE_ZAGREB',
  /** Zaporozhye */
  EuropeZaporozhye = 'EUROPE_ZAPOROZHYE',
  /** Zurich */
  EuropeZurich = 'EUROPE_ZURICH',
  /** Antananarivo */
  IndianAntananarivo = 'INDIAN_ANTANANARIVO',
  /** Chagos */
  IndianChagos = 'INDIAN_CHAGOS',
  /** Christmas */
  IndianChristmas = 'INDIAN_CHRISTMAS',
  /** Cocos */
  IndianCocos = 'INDIAN_COCOS',
  /** Comoro */
  IndianComoro = 'INDIAN_COMORO',
  /** Kerguelen */
  IndianKerguelen = 'INDIAN_KERGUELEN',
  /** Mahe */
  IndianMahe = 'INDIAN_MAHE',
  /** Maldives */
  IndianMaldives = 'INDIAN_MALDIVES',
  /** Mauritius */
  IndianMauritius = 'INDIAN_MAURITIUS',
  /** Mayotte */
  IndianMayotte = 'INDIAN_MAYOTTE',
  /** Reunion */
  IndianReunion = 'INDIAN_REUNION',
  /** Apia */
  PacificApia = 'PACIFIC_APIA',
  /** Auckland */
  PacificAuckland = 'PACIFIC_AUCKLAND',
  /** Bougainville */
  PacificBougainville = 'PACIFIC_BOUGAINVILLE',
  /** Chatham */
  PacificChatham = 'PACIFIC_CHATHAM',
  /** Chuuk */
  PacificChuuk = 'PACIFIC_CHUUK',
  /** Easter */
  PacificEaster = 'PACIFIC_EASTER',
  /** Efate */
  PacificEfate = 'PACIFIC_EFATE',
  /** Enderbury */
  PacificEnderbury = 'PACIFIC_ENDERBURY',
  /** Fakaofo */
  PacificFakaofo = 'PACIFIC_FAKAOFO',
  /** Fiji */
  PacificFiji = 'PACIFIC_FIJI',
  /** Funafuti */
  PacificFunafuti = 'PACIFIC_FUNAFUTI',
  /** Galapagos */
  PacificGalapagos = 'PACIFIC_GALAPAGOS',
  /** Gambier */
  PacificGambier = 'PACIFIC_GAMBIER',
  /** Guadalcanal */
  PacificGuadalcanal = 'PACIFIC_GUADALCANAL',
  /** Guam */
  PacificGuam = 'PACIFIC_GUAM',
  /** Honolulu */
  PacificHonolulu = 'PACIFIC_HONOLULU',
  /** Kiritimati */
  PacificKiritimati = 'PACIFIC_KIRITIMATI',
  /** Kosrae */
  PacificKosrae = 'PACIFIC_KOSRAE',
  /** Kwajalein */
  PacificKwajalein = 'PACIFIC_KWAJALEIN',
  /** Majuro */
  PacificMajuro = 'PACIFIC_MAJURO',
  /** Marquesas */
  PacificMarquesas = 'PACIFIC_MARQUESAS',
  /** Midway */
  PacificMidway = 'PACIFIC_MIDWAY',
  /** Nauru */
  PacificNauru = 'PACIFIC_NAURU',
  /** Niue */
  PacificNiue = 'PACIFIC_NIUE',
  /** Norfolk */
  PacificNorfolk = 'PACIFIC_NORFOLK',
  /** Noumea */
  PacificNoumea = 'PACIFIC_NOUMEA',
  /** Pago Pago */
  PacificPagoPago = 'PACIFIC_PAGO_PAGO',
  /** Palau */
  PacificPalau = 'PACIFIC_PALAU',
  /** Pitcairn */
  PacificPitcairn = 'PACIFIC_PITCAIRN',
  /** Pohnpei */
  PacificPohnpei = 'PACIFIC_POHNPEI',
  /** Port Moresby */
  PacificPortMoresby = 'PACIFIC_PORT_MORESBY',
  /** Rarotonga */
  PacificRarotonga = 'PACIFIC_RAROTONGA',
  /** Saipan */
  PacificSaipan = 'PACIFIC_SAIPAN',
  /** Tahiti */
  PacificTahiti = 'PACIFIC_TAHITI',
  /** Tarawa */
  PacificTarawa = 'PACIFIC_TARAWA',
  /** Tongatapu */
  PacificTongatapu = 'PACIFIC_TONGATAPU',
  /** Wake */
  PacificWake = 'PACIFIC_WAKE',
  /** Wallis */
  PacificWallis = 'PACIFIC_WALLIS',
  /** UTC offset: UTC+0 */
  Utc_0 = 'UTC_0',
  /** UTC offset: UTC+0:30 */
  Utc_0_30 = 'UTC_0_30',
  /** UTC offset: UTC+1 */
  Utc_1 = 'UTC_1',
  /** UTC offset: UTC+10 */
  Utc_10 = 'UTC_10',
  /** UTC offset: UTC+10:30 */
  Utc_10_30 = 'UTC_10_30',
  /** UTC offset: UTC+11 */
  Utc_11 = 'UTC_11',
  /** UTC offset: UTC+11:30 */
  Utc_11_30 = 'UTC_11_30',
  /** UTC offset: UTC+12 */
  Utc_12 = 'UTC_12',
  /** UTC offset: UTC+12:45 */
  Utc_12_45 = 'UTC_12_45',
  /** UTC offset: UTC+13 */
  Utc_13 = 'UTC_13',
  /** UTC offset: UTC+13:45 */
  Utc_13_45 = 'UTC_13_45',
  /** UTC offset: UTC+14 */
  Utc_14 = 'UTC_14',
  /** UTC offset: UTC+1:30 */
  Utc_1_30 = 'UTC_1_30',
  /** UTC offset: UTC+2 */
  Utc_2 = 'UTC_2',
  /** UTC offset: UTC+2:30 */
  Utc_2_30 = 'UTC_2_30',
  /** UTC offset: UTC+3 */
  Utc_3 = 'UTC_3',
  /** UTC offset: UTC+3:30 */
  Utc_3_30 = 'UTC_3_30',
  /** UTC offset: UTC+4 */
  Utc_4 = 'UTC_4',
  /** UTC offset: UTC+4:30 */
  Utc_4_30 = 'UTC_4_30',
  /** UTC offset: UTC+5 */
  Utc_5 = 'UTC_5',
  /** UTC offset: UTC+5:30 */
  Utc_5_30 = 'UTC_5_30',
  /** UTC offset: UTC+5:45 */
  Utc_5_45 = 'UTC_5_45',
  /** UTC offset: UTC+6 */
  Utc_6 = 'UTC_6',
  /** UTC offset: UTC+6:30 */
  Utc_6_30 = 'UTC_6_30',
  /** UTC offset: UTC+7 */
  Utc_7 = 'UTC_7',
  /** UTC offset: UTC+7:30 */
  Utc_7_30 = 'UTC_7_30',
  /** UTC offset: UTC+8 */
  Utc_8 = 'UTC_8',
  /** UTC offset: UTC+8:30 */
  Utc_8_30 = 'UTC_8_30',
  /** UTC offset: UTC+8:45 */
  Utc_8_45 = 'UTC_8_45',
  /** UTC offset: UTC+9 */
  Utc_9 = 'UTC_9',
  /** UTC offset: UTC+9:30 */
  Utc_9_30 = 'UTC_9_30'
}

/** Options for filtering the connection */
export interface MenuItemsWhereArgs {
  /** The ID of the object */
  readonly id: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  readonly location: Maybe<MenuLocationEnum>;
}

export type PostObjectUnion = Post | Page | MediaItem;

export type TermObjectUnion = Category | Tag | PostFormat | ProductType | VisibleProduct | ProductCategory | ProductTag | ShippingClass;

/** The template assigned to the node */
export interface DefaultTemplate extends ContentTemplate {
  readonly __typename: 'DefaultTemplate';
  /**
   * The file the template uses
   * @deprecated
   */
  readonly templateFile: Maybe<Scalars['String']>;
  /**
   * The name of the template
   * @deprecated
   */
  readonly templateName: Maybe<Scalars['String']>;
}

/** The template assigned to the node */
export interface BlankPageTemplateTemplate extends ContentTemplate {
  readonly __typename: 'BlankPageTemplateTemplate';
  /**
   * The file the template uses
   * @deprecated
   */
  readonly templateFile: Maybe<Scalars['String']>;
  /**
   * The name of the template
   * @deprecated
   */
  readonly templateName: Maybe<Scalars['String']>;
}

/** The template assigned to the node */
export interface PageWithSidebarFullWidthTemplate extends ContentTemplate {
  readonly __typename: 'PageWithSidebarFullWidthTemplate';
  /**
   * The file the template uses
   * @deprecated
   */
  readonly templateFile: Maybe<Scalars['String']>;
  /**
   * The name of the template
   * @deprecated
   */
  readonly templateName: Maybe<Scalars['String']>;
}

/** The template assigned to the node */
export interface PageWithSidebarTemplate extends ContentTemplate {
  readonly __typename: 'PageWithSidebarTemplate';
  /**
   * The file the template uses
   * @deprecated
   */
  readonly templateFile: Maybe<Scalars['String']>;
  /**
   * The name of the template
   * @deprecated
   */
  readonly templateName: Maybe<Scalars['String']>;
}

/** The template assigned to the node */
export interface FixedTemplate extends ContentTemplate {
  readonly __typename: 'FixedTemplate';
  /**
   * The file the template uses
   * @deprecated
   */
  readonly templateFile: Maybe<Scalars['String']>;
  /**
   * The name of the template
   * @deprecated
   */
  readonly templateName: Maybe<Scalars['String']>;
}

/** The template assigned to the node */
export interface LeftSidebarTemplate extends ContentTemplate {
  readonly __typename: 'LeftSidebarTemplate';
  /**
   * The file the template uses
   * @deprecated
   */
  readonly templateFile: Maybe<Scalars['String']>;
  /**
   * The name of the template
   * @deprecated
   */
  readonly templateName: Maybe<Scalars['String']>;
}

/** The template assigned to the node */
export interface RightSidebarTemplate extends ContentTemplate {
  readonly __typename: 'RightSidebarTemplate';
  /**
   * The file the template uses
   * @deprecated
   */
  readonly templateFile: Maybe<Scalars['String']>;
  /**
   * The name of the template
   * @deprecated
   */
  readonly templateName: Maybe<Scalars['String']>;
}

export type GetCartQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartQuery = { readonly __typename: 'RootQuery', readonly cart: Maybe<{ readonly __typename: 'Cart', readonly total: Maybe<string>, readonly contents: Maybe<{ readonly __typename: 'CartToCartItemConnection', readonly itemCount: Maybe<number>, readonly nodes: Maybe<ReadonlyArray<Maybe<{ readonly __typename: 'CartItem', readonly quantity: Maybe<number>, readonly key: string, readonly total: Maybe<string>, readonly product: Maybe<{ readonly __typename: 'VariableProduct', readonly name: Maybe<string>, readonly image: Maybe<{ readonly __typename: 'MediaItem', readonly sourceUrl: Maybe<string> }>, readonly galleryImages: Maybe<{ readonly __typename: 'ProductToMediaItemConnection', readonly nodes: Maybe<ReadonlyArray<Maybe<{ readonly __typename: 'MediaItem', readonly sourceUrl: Maybe<string> }>>> }> } | { readonly __typename: 'ExternalProduct', readonly name: Maybe<string>, readonly image: Maybe<{ readonly __typename: 'MediaItem', readonly sourceUrl: Maybe<string> }>, readonly galleryImages: Maybe<{ readonly __typename: 'ProductToMediaItemConnection', readonly nodes: Maybe<ReadonlyArray<Maybe<{ readonly __typename: 'MediaItem', readonly sourceUrl: Maybe<string> }>>> }> } | { readonly __typename: 'GroupProduct', readonly name: Maybe<string>, readonly image: Maybe<{ readonly __typename: 'MediaItem', readonly sourceUrl: Maybe<string> }>, readonly galleryImages: Maybe<{ readonly __typename: 'ProductToMediaItemConnection', readonly nodes: Maybe<ReadonlyArray<Maybe<{ readonly __typename: 'MediaItem', readonly sourceUrl: Maybe<string> }>>> }> } | { readonly __typename: 'SimpleProduct', readonly stockQuantity: Maybe<number>, readonly name: Maybe<string>, readonly image: Maybe<{ readonly __typename: 'MediaItem', readonly sourceUrl: Maybe<string> }>, readonly galleryImages: Maybe<{ readonly __typename: 'ProductToMediaItemConnection', readonly nodes: Maybe<ReadonlyArray<Maybe<{ readonly __typename: 'MediaItem', readonly sourceUrl: Maybe<string> }>>> }> }> }>>> }> }> };

export type GetCartQuantityQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartQuantityQuery = { readonly __typename: 'RootQuery', readonly cart: Maybe<{ readonly __typename: 'Cart', readonly contents: Maybe<{ readonly __typename: 'CartToCartItemConnection', readonly nodes: Maybe<ReadonlyArray<Maybe<{ readonly __typename: 'CartItem', readonly quantity: Maybe<number>, readonly product: Maybe<{ readonly __typename: 'VariableProduct', readonly databaseId: number } | { readonly __typename: 'ExternalProduct', readonly databaseId: number } | { readonly __typename: 'GroupProduct', readonly databaseId: number } | { readonly __typename: 'SimpleProduct', readonly stockQuantity: Maybe<number>, readonly databaseId: number }> }>>> }> }> };

export type RemoveFromCartMutationVariables = Exact<{
  key: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
}>;


export type RemoveFromCartMutation = { readonly __typename: 'RootMutation', readonly removeItemsFromCart: Maybe<{ readonly __typename: 'RemoveItemsFromCartPayload', readonly clientMutationId: string }> };

export type UpdateCartMutationVariables = Exact<{
  items: Maybe<ReadonlyArray<Maybe<CartItemQuantityInput>>>;
}>;


export type UpdateCartMutation = { readonly __typename: 'RootMutation', readonly updateItemQuantities: Maybe<{ readonly __typename: 'UpdateItemQuantitiesPayload', readonly clientMutationId: string }> };

export type AddToCartMutationVariables = Exact<{
  pdId: Scalars['Int'];
}>;


export type AddToCartMutation = { readonly __typename: 'RootMutation', readonly addToCart: Maybe<{ readonly __typename: 'AddToCartPayload', readonly cart: Maybe<{ readonly __typename: 'Cart', readonly contents: Maybe<{ readonly __typename: 'CartToCartItemConnection', readonly itemCount: Maybe<number> }> }> }> };

export type CheckoutMutationVariables = Exact<{
  input: CheckoutInput;
}>;


export type CheckoutMutation = { readonly __typename: 'RootMutation', readonly checkout: Maybe<{ readonly __typename: 'CheckoutPayload', readonly result: Maybe<string>, readonly order: Maybe<{ readonly __typename: 'Order', readonly databaseId: Maybe<number>, readonly date: Maybe<string>, readonly subtotal: Maybe<string>, readonly total: Maybe<string>, readonly lineItems: Maybe<{ readonly __typename: 'OrderToLineItemConnection', readonly nodes: Maybe<ReadonlyArray<Maybe<{ readonly __typename: 'LineItem', readonly quantity: Maybe<number>, readonly subtotal: Maybe<string>, readonly product: Maybe<{ readonly __typename: 'VariableProduct', readonly databaseId: number, readonly name: Maybe<string> } | { readonly __typename: 'ExternalProduct', readonly databaseId: number, readonly name: Maybe<string> } | { readonly __typename: 'GroupProduct', readonly databaseId: number, readonly name: Maybe<string> } | { readonly __typename: 'SimpleProduct', readonly databaseId: number, readonly name: Maybe<string> }> }>>> }> }> }> };

export type GetProductQuantityQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductQuantityQuery = { readonly __typename: 'RootQuery', readonly product: Maybe<{ readonly __typename: 'VariableProduct' } | { readonly __typename: 'ExternalProduct' } | { readonly __typename: 'GroupProduct' } | { readonly __typename: 'SimpleProduct', readonly stockQuantity: Maybe<number> }> };

export type GetProductDetail1QueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductDetail1Query = { readonly __typename: 'RootQuery', readonly product: Maybe<{ readonly __typename: 'VariableProduct' } | { readonly __typename: 'ExternalProduct' } | { readonly __typename: 'GroupProduct' } | { readonly __typename: 'SimpleProduct', readonly name: Maybe<string>, readonly regularPrice: Maybe<string>, readonly salePrice: Maybe<string>, readonly image: Maybe<{ readonly __typename: 'MediaItem', readonly sourceUrl: Maybe<string> }> }> };

export type GetHomeProductQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type GetHomeProductQuery = { readonly __typename: 'RootQuery', readonly products: Maybe<{ readonly __typename: 'RootQueryToProductConnection', readonly nodes: Maybe<ReadonlyArray<Maybe<{ readonly __typename: 'VariableProduct', readonly name: Maybe<string>, readonly databaseId: number, readonly image: Maybe<{ readonly __typename: 'MediaItem', readonly sourceUrl: Maybe<string> }> } | { readonly __typename: 'ExternalProduct', readonly name: Maybe<string>, readonly databaseId: number, readonly image: Maybe<{ readonly __typename: 'MediaItem', readonly sourceUrl: Maybe<string> }> } | { readonly __typename: 'GroupProduct', readonly name: Maybe<string>, readonly databaseId: number, readonly image: Maybe<{ readonly __typename: 'MediaItem', readonly sourceUrl: Maybe<string> }> } | { readonly __typename: 'SimpleProduct', readonly regularPrice: Maybe<string>, readonly salePrice: Maybe<string>, readonly name: Maybe<string>, readonly databaseId: number, readonly image: Maybe<{ readonly __typename: 'MediaItem', readonly sourceUrl: Maybe<string> }> }>>> }> };


export const GetCartDocument = gql`
    query GetCart {
  __typename
  cart {
    total
    contents {
      itemCount
      nodes {
        quantity
        key
        total
        product {
          name
          ... on SimpleProduct {
            stockQuantity
          }
          image {
            sourceUrl(size: SHOP_SINGLE)
          }
          galleryImages {
            nodes {
              sourceUrl(size: SHOP_SINGLE)
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCartQuery__
 *
 * To run a query within a React component, call `useGetCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCartQuery(baseOptions?: Apollo.QueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
        return Apollo.useQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, baseOptions);
      }
export function useGetCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
          return Apollo.useLazyQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, baseOptions);
        }
export type GetCartQueryHookResult = ReturnType<typeof useGetCartQuery>;
export type GetCartLazyQueryHookResult = ReturnType<typeof useGetCartLazyQuery>;
export type GetCartQueryResult = Apollo.QueryResult<GetCartQuery, GetCartQueryVariables>;
export const GetCartQuantityDocument = gql`
    query GetCartQuantity {
  __typename
  cart {
    contents {
      nodes {
        quantity
        product {
          databaseId
          ... on SimpleProduct {
            stockQuantity
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCartQuantityQuery__
 *
 * To run a query within a React component, call `useGetCartQuantityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartQuantityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartQuantityQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCartQuantityQuery(baseOptions?: Apollo.QueryHookOptions<GetCartQuantityQuery, GetCartQuantityQueryVariables>) {
        return Apollo.useQuery<GetCartQuantityQuery, GetCartQuantityQueryVariables>(GetCartQuantityDocument, baseOptions);
      }
export function useGetCartQuantityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartQuantityQuery, GetCartQuantityQueryVariables>) {
          return Apollo.useLazyQuery<GetCartQuantityQuery, GetCartQuantityQueryVariables>(GetCartQuantityDocument, baseOptions);
        }
export type GetCartQuantityQueryHookResult = ReturnType<typeof useGetCartQuantityQuery>;
export type GetCartQuantityLazyQueryHookResult = ReturnType<typeof useGetCartQuantityLazyQuery>;
export type GetCartQuantityQueryResult = Apollo.QueryResult<GetCartQuantityQuery, GetCartQuantityQueryVariables>;
export const RemoveFromCartDocument = gql`
    mutation RemoveFromCart($key: [ID]) {
  __typename
  removeItemsFromCart(input: {keys: $key, clientMutationId: "1234"}) {
    clientMutationId
  }
}
    `;
export type RemoveFromCartMutationFn = Apollo.MutationFunction<RemoveFromCartMutation, RemoveFromCartMutationVariables>;

/**
 * __useRemoveFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromCartMutation, { data, loading, error }] = useRemoveFromCartMutation({
 *   variables: {
 *      key: // value for 'key'
 *   },
 * });
 */
export function useRemoveFromCartMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFromCartMutation, RemoveFromCartMutationVariables>) {
        return Apollo.useMutation<RemoveFromCartMutation, RemoveFromCartMutationVariables>(RemoveFromCartDocument, baseOptions);
      }
export type RemoveFromCartMutationHookResult = ReturnType<typeof useRemoveFromCartMutation>;
export type RemoveFromCartMutationResult = Apollo.MutationResult<RemoveFromCartMutation>;
export type RemoveFromCartMutationOptions = Apollo.BaseMutationOptions<RemoveFromCartMutation, RemoveFromCartMutationVariables>;
export const UpdateCartDocument = gql`
    mutation UpdateCart($items: [CartItemQuantityInput]) {
  updateItemQuantities(input: {clientMutationId: "jj", items: $items}) {
    clientMutationId
  }
}
    `;
export type UpdateCartMutationFn = Apollo.MutationFunction<UpdateCartMutation, UpdateCartMutationVariables>;

/**
 * __useUpdateCartMutation__
 *
 * To run a mutation, you first call `useUpdateCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCartMutation, { data, loading, error }] = useUpdateCartMutation({
 *   variables: {
 *      items: // value for 'items'
 *   },
 * });
 */
export function useUpdateCartMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCartMutation, UpdateCartMutationVariables>) {
        return Apollo.useMutation<UpdateCartMutation, UpdateCartMutationVariables>(UpdateCartDocument, baseOptions);
      }
export type UpdateCartMutationHookResult = ReturnType<typeof useUpdateCartMutation>;
export type UpdateCartMutationResult = Apollo.MutationResult<UpdateCartMutation>;
export type UpdateCartMutationOptions = Apollo.BaseMutationOptions<UpdateCartMutation, UpdateCartMutationVariables>;
export const AddToCartDocument = gql`
    mutation AddToCart($pdId: Int!) {
  addToCart(input: {productId: $pdId, quantity: 1, clientMutationId: "1234"}) {
    cart {
      contents {
        itemCount
      }
    }
  }
}
    `;
export type AddToCartMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      pdId: // value for 'pdId'
 *   },
 * });
 */
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, baseOptions);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
export const CheckoutDocument = gql`
    mutation Checkout($input: CheckoutInput!) {
  __typename
  checkout(input: $input) {
    result
    order {
      databaseId
      date
      lineItems {
        nodes {
          product {
            databaseId
            name
          }
          quantity
          subtotal
        }
      }
      subtotal
      total
    }
  }
}
    `;
export type CheckoutMutationFn = Apollo.MutationFunction<CheckoutMutation, CheckoutMutationVariables>;

/**
 * __useCheckoutMutation__
 *
 * To run a mutation, you first call `useCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutMutation, { data, loading, error }] = useCheckoutMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCheckoutMutation(baseOptions?: Apollo.MutationHookOptions<CheckoutMutation, CheckoutMutationVariables>) {
        return Apollo.useMutation<CheckoutMutation, CheckoutMutationVariables>(CheckoutDocument, baseOptions);
      }
export type CheckoutMutationHookResult = ReturnType<typeof useCheckoutMutation>;
export type CheckoutMutationResult = Apollo.MutationResult<CheckoutMutation>;
export type CheckoutMutationOptions = Apollo.BaseMutationOptions<CheckoutMutation, CheckoutMutationVariables>;
export const GetProductQuantityDocument = gql`
    query GetProductQuantity($id: ID!) {
  __typename
  product(id: $id, idType: DATABASE_ID) {
    ... on SimpleProduct {
      stockQuantity
    }
  }
}
    `;

/**
 * __useGetProductQuantityQuery__
 *
 * To run a query within a React component, call `useGetProductQuantityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuantityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuantityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuantityQuery(baseOptions: Apollo.QueryHookOptions<GetProductQuantityQuery, GetProductQuantityQueryVariables>) {
        return Apollo.useQuery<GetProductQuantityQuery, GetProductQuantityQueryVariables>(GetProductQuantityDocument, baseOptions);
      }
export function useGetProductQuantityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuantityQuery, GetProductQuantityQueryVariables>) {
          return Apollo.useLazyQuery<GetProductQuantityQuery, GetProductQuantityQueryVariables>(GetProductQuantityDocument, baseOptions);
        }
export type GetProductQuantityQueryHookResult = ReturnType<typeof useGetProductQuantityQuery>;
export type GetProductQuantityLazyQueryHookResult = ReturnType<typeof useGetProductQuantityLazyQuery>;
export type GetProductQuantityQueryResult = Apollo.QueryResult<GetProductQuantityQuery, GetProductQuantityQueryVariables>;
export const GetProductDetail1Document = gql`
    query GetProductDetail1($id: ID!) {
  __typename
  product(id: $id, idType: DATABASE_ID) {
    ... on SimpleProduct {
      name
      image {
        sourceUrl(size: GALLERY_MASONRY)
      }
      regularPrice
      salePrice
    }
  }
}
    `;

/**
 * __useGetProductDetail1Query__
 *
 * To run a query within a React component, call `useGetProductDetail1Query` and pass it any options that fit your needs.
 * When your component renders, `useGetProductDetail1Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductDetail1Query({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductDetail1Query(baseOptions: Apollo.QueryHookOptions<GetProductDetail1Query, GetProductDetail1QueryVariables>) {
        return Apollo.useQuery<GetProductDetail1Query, GetProductDetail1QueryVariables>(GetProductDetail1Document, baseOptions);
      }
export function useGetProductDetail1LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductDetail1Query, GetProductDetail1QueryVariables>) {
          return Apollo.useLazyQuery<GetProductDetail1Query, GetProductDetail1QueryVariables>(GetProductDetail1Document, baseOptions);
        }
export type GetProductDetail1QueryHookResult = ReturnType<typeof useGetProductDetail1Query>;
export type GetProductDetail1LazyQueryHookResult = ReturnType<typeof useGetProductDetail1LazyQuery>;
export type GetProductDetail1QueryResult = Apollo.QueryResult<GetProductDetail1Query, GetProductDetail1QueryVariables>;
export const GetHomeProductDocument = gql`
    query GetHomeProduct($first: Int!) {
  products(
    where: {search: "", orderby: {order: ASC, field: DATE}, tag: "hot products"}
    after: ""
    first: $first
  ) {
    nodes {
      name
      databaseId
      image {
        sourceUrl(size: MEDIUM)
      }
      ... on SimpleProduct {
        regularPrice(format: FORMATTED)
          salePrice(format: FORMATTED)
      }
    }
  }
}
    `;

/**
 * __useGetHomeProductQuery__
 *
 * To run a query within a React component, call `useGetHomeProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeProductQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetHomeProductQuery(baseOptions: Apollo.QueryHookOptions<GetHomeProductQuery, GetHomeProductQueryVariables>) {
        return Apollo.useQuery<GetHomeProductQuery, GetHomeProductQueryVariables>(GetHomeProductDocument, baseOptions);
      }
export function useGetHomeProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomeProductQuery, GetHomeProductQueryVariables>) {
          return Apollo.useLazyQuery<GetHomeProductQuery, GetHomeProductQueryVariables>(GetHomeProductDocument, baseOptions);
        }
export type GetHomeProductQueryHookResult = ReturnType<typeof useGetHomeProductQuery>;
export type GetHomeProductLazyQueryHookResult = ReturnType<typeof useGetHomeProductLazyQuery>;
export type GetHomeProductQueryResult = Apollo.QueryResult<GetHomeProductQuery, GetHomeProductQueryVariables>;
