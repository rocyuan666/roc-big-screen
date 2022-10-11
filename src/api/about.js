import { request } from "@/common/request";

export function getBannerList(params) {
  return request({
    url: "/banner",
    method: "get",
    params,
  });
}
