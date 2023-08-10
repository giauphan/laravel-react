<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use Illuminate\Http\Request;

class LikeandView extends Controller
{
    public function addToCart(Request $request, BlogPost $product)
    {
        $cart = session()->get('cart', []);
        $payment = ($request->payment) ? ($request->payment) : "";
        // Check if the product already exists in the cart
        if (isset($cart[$product->id])) {
            // Increment the quantity if the product is already in the cart
            $cart[$product->id]['quantity']++;
        } else {
            // Add the product to the cart with a quantity of 1
            $cart[$product->id] = [
                'id' => $product->id,
                'name' => $product->productTitle,
                'price' => $product->giasp,
                'iamges' => $product->hinh,
                'quantity' => 1,
            ];
        }
        $quantity =    $cart[$product->id]['quantity'];
        $product = BlogPost::where('productTitle',     $cart[$product->id]['name'])->where('trang_thai_sp', 1)->get();

        if (count($product) >=  $quantity) {

            // Store the updated cart in the session
            session()->put('cart', $cart);

            // Save the cart to the database if the user is logged in
            if ($request->user()) {
                foreach ($cart as $item) {
                    BlogPost::updateOrCreate(
                        [
                            'ma_kh' =>  $request->user()->id,
                            'ma_sp' => $item['id'],
                        ],
                        [
                            'price' => $item['price'],
                            'quantity' => $item['quantity'],
                        ]
                    );
                }
            }
            // Redirect back or to a specific page
            if ($payment == "") {
                return redirect()->back()->with('success', 'thêm sản phẩm giỏ hàng thành công');
            } else {
                return redirect()->route('cart');
            }
        } else {
            return redirect()->back()->with('error', 'Sản phẩm số lượng tối đa');
        }
    }
    public function removeFromCart(Request $request, $productId)
    {

        $cart = session()->get('cart', []);
        if (isset($cart[$productId])) {
            unset($cart[$productId]);
            // Update the cart in the session
            session()->put('cart', $cart);
            // Delete the item from the database if the user is logged in
            if ($request->user()) {
                BlogPost::where('ma_kh', $request->user()->id)
                    ->where('ma_sp', $productId)
                    ->delete();
            }
            return redirect()->back()->with('success', 'Product removed from cart successfully.');
        }

        return redirect()->back()->with('error', 'Product not found in cart.');
    }
}
