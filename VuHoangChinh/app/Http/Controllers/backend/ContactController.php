<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $list=Contact::where('contact.status','!=',0)
        ->select("id","name","email","phone","content","status",)
        ->orderBy('contact.created_at','desc')
        ->get();
        return view("backend.contact.index",compact('list'));
    }

    public function trash()
    {
        // $mang=[
        //     ['status','>',1],
        //     ['id','>',1]
        // ];
        $list=Contact::where('contact.status','=',0)
        ->select("id","name","email","phone","content","status",)
        ->orderBy('contact.created_at','desc')
        ->get();
        return view("backend.contact.trash",compact('list'));
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $list= Contact::find($id);
        if($list==null){
            return redirect()->route('admin.contact.index');
        }
        return view("backend.contact.show",compact("list"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $contact= Contact::find($id);
        if($contact==null){
            return redirect()->route('admin.contact.index');
        }
        $list=Contact::where('contact.status','!=',0)
        ->select("id","name","email","phone","content","status",)
        ->orderBy('contact.created_at','desc')
        ->get();
    
        return view("backend.contact.edit",compact("list","contact"));
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactRequest $request, string $id)
    {
        $contact= Contact::find($id);
        if($contact==null){
            return redirect()->route('admin.contact.index');
        }

        $contact->name=$request->name;
        $contact->content=$request->content;
        $contact->phone=$request->phone;
        $contact->email=$request->email;
      
        $contact->status=$request->status;

        $contact->updated_at=date('Y-m-d H:i:s');
        $contact->updated_by=Auth::id()?? 1;

        $contact->save();
        return redirect()->route('admin.contact.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $contact= Contact::find($id);
        if($contact==null){
            return redirect()->route('admin.contact.index');
        }
        $contact->delete();
        return redirect()->route('admin.contact.trash');
    }

    public function status(string $id)
    {
        $contact= Contact::find($id);
        if($contact==null){
            return redirect()->route('admin.contact.index');
        }
        $contact->status=($contact->status==1) ? 2 : 1;
        $contact->updated_at=date('Y-m-d H:i:s');
        $contact->updated_by=Auth::id()?? 1;

        $contact->save();
        return redirect()->route('admin.contact.index');
    }

    public function delete(string $id)
    {
        $contact= Contact::find($id);
        if($contact==null){
            return redirect()->route('admin.contact.index');
        }
        $contact->status=0;
        $contact->updated_at=date('Y-m-d H:i:s');
        $contact->updated_by=Auth::id()?? 1;

        $contact->save();
        return redirect()->route('admin.contact.index');
    }
    public function restore(string $id)
    {
        $contact= Contact::find($id);
        if($contact==null){
            return redirect()->route('admin.contact.index');
        }
        $contact->status=2;
        $contact->updated_at=date('Y-m-d H:i:s');
        $contact->updated_by=Auth::id()?? 1;

        $contact->save();
        return redirect()->route('admin.contact.trash');
    }
}